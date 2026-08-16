/**
 * VisitorTelemetry.js
 * High-performance, privacy-compliant real-time visitor telemetry for GamersCraft.
 * Captures pageviews, geolocation, ISP/Organization, referral tags, and interactive events.
 */

// Default configuration (Can be overridden via window.GAMERSCRAFT_CONFIG or localStorage)
const CONFIG = {
    // Paste your Discord Webhook URL here or set via localStorage.setItem('GAMERSCRAFT_DISCORD_WEBHOOK', '...')
    discordWebhookUrl: (typeof window !== 'undefined' && window.GAMERSCRAFT_CONFIG?.discordWebhookUrl) 
        || (typeof localStorage !== 'undefined' && localStorage.getItem('GAMERSCRAFT_DISCORD_WEBHOOK'))
        || '', 
    enableConsoleLogs: true,
};

/**
 * Helper to convert country code to Flag Emoji (e.g., 'US' -> 🇺🇸)
 */
function getCountryFlag(countryCode) {
    if (!countryCode || countryCode.length !== 2) return '🌐';
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
}

/**
 * Detect Device & Browser details
 */
function getDeviceDetails() {
    const ua = navigator.userAgent;
    let os = 'Unknown OS';
    if (ua.includes('Win')) os = 'Windows';
    else if (ua.includes('Mac')) os = 'macOS';
    else if (ua.includes('Linux')) os = 'Linux';
    else if (ua.includes('Android')) os = 'Android';
    else if (ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS';

    let browser = 'Unknown Browser';
    if (ua.includes('Edg/')) browser = 'Microsoft Edge';
    else if (ua.includes('Chrome/')) browser = 'Google Chrome';
    else if (ua.includes('Firefox/')) browser = 'Mozilla Firefox';
    else if (ua.includes('Safari/') && !ua.includes('Chrome/')) browser = 'Apple Safari';

    const isMobile = /Mobi|Android|iPhone|iPad/i.test(ua) || window.innerWidth < 768;
    const deviceType = isMobile ? '📱 Mobile' : '💻 Desktop';

    return {
        os,
        browser,
        deviceType,
        screen: `${window.screen.width}x${window.screen.height} (Viewport: ${window.innerWidth}x${window.innerHeight})`,
        language: navigator.language || 'en',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'
    };
}

/**
 * Parse Tracking Query Parameters (?ref=riot_recruiter, ?client=acme, ?utm_source=linkedin)
 */
function getTrackingTags() {
    const urlParams = new URLSearchParams(window.location.search);
    const refTag = urlParams.get('ref') || urlParams.get('recruiter') || urlParams.get('client') || urlParams.get('tag');
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');

    return {
        refTag: refTag ? `🎯 **${refTag}**` : null,
        utmSource,
        utmMedium,
        utmCampaign,
        rawSearch: window.location.search || 'None'
    };
}

/**
 * Fetch visitor IP Geolocation with automatic fallback
 */
async function fetchGeoLocation() {
    // 1st attempt: freeipapi.com (Fast, reliable, HTTPS, CORS-friendly)
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 2500);
        const res = await fetch('https://freeipapi.com/api/json', { signal: controller.signal });
        clearTimeout(timeout);
        if (res.ok) {
            const data = await res.json();
            return {
                country: data.countryName || 'Unknown Country',
                countryCode: data.countryCode || '??',
                city: data.cityName || 'Unknown City',
                region: data.regionName || '',
                flag: getCountryFlag(data.countryCode),
                ip: data.ipAddress || 'Anonymized',
                isp: 'Standard ISP'
            };
        }
    } catch (e) {
        // Fallback to second service
    }

    // 2nd attempt: ipapi.co
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 2500);
        const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
        clearTimeout(timeout);
        if (res.ok) {
            const data = await res.json();
            return {
                country: data.country_name || 'Unknown Country',
                countryCode: data.country_code || '??',
                city: data.city || 'Unknown City',
                region: data.region || '',
                flag: getCountryFlag(data.country_code),
                ip: data.ip || 'Anonymized',
                isp: data.org || data.asn || 'Standard ISP'
            };
        }
    } catch (e) {
        // Silent fallback
    }

    return {
        country: 'Global Explorer',
        countryCode: 'UN',
        city: 'Earth',
        region: '',
        flag: '🌍',
        ip: 'Protected',
        isp: 'Private Network'
    };
}

/**
 * Send Discord Webhook payload
 */
async function dispatchDiscordPayload(payload) {
    const webhookUrl = (typeof window !== 'undefined' && window.GAMERSCRAFT_CONFIG?.discordWebhookUrl) 
        || (typeof localStorage !== 'undefined' && localStorage.getItem('GAMERSCRAFT_DISCORD_WEBHOOK'))
        || CONFIG.discordWebhookUrl;

    if (!webhookUrl) {
        if (CONFIG.enableConsoleLogs) {
            console.log(
                `%c[GamersCraft Telemetry]%c Webhook not configured yet. Live event simulated:`,
                'color: #70e000; font-weight: bold;',
                'color: #94a3b8;',
                payload
            );
            console.info(`💡 Tip: To receive live alerts on your Discord channel, run:\nlocalStorage.setItem('GAMERSCRAFT_DISCORD_WEBHOOK', 'YOUR_DISCORD_WEBHOOK_URL');`);
        }
        return false;
    }

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        return response.ok;
    } catch (err) {
        console.warn('[Telemetry] Transmission error:', err);
        return false;
    }
}

/**
 * Main function: Logs a page visit once per session
 */
export async function trackSessionVisit() {
    // Prevent duplicate alerts in the same browser session
    if (sessionStorage.getItem('gamerscraft_session_logged')) {
        return;
    }

    const device = getDeviceDetails();
    const tracking = getTrackingTags();
    const referrer = document.referrer ? new URL(document.referrer).hostname : 'Direct / Bookmark';
    const geo = await fetchGeoLocation();

    sessionStorage.setItem('gamerscraft_session_logged', 'true');

    // Format location title
    const locationString = `${geo.flag} ${geo.city}${geo.region ? `, ${geo.region}` : ''}, ${geo.country}`;
    
    // Construct rich Discord embed
    const discordPayload = {
        username: "GamersCraft Telemetry",
        avatar_url: "https://raw.githubusercontent.com/funkar01/GamersCraft/main/images/gameio_mascot.png",
        embeds: [
            {
                title: "🎮 New GamersCraft Visitor Detected",
                color: 0x70e000, // Neon Lime
                description: tracking.refTag 
                    ? `🔥 **VIP Custom Link Detected:** ${tracking.refTag}` 
                    : `A visitor just landed on your portfolio!`,
                fields: [
                    {
                        name: "📍 Location",
                        value: locationString,
                        inline: true
                    },
                    {
                        name: "🏢 Network / ISP",
                        value: geo.isp || "General ISP",
                        inline: true
                    },
                    {
                        name: "🔗 Referrer",
                        value: referrer,
                        inline: true
                    },
                    {
                        name: "💻 Device & OS",
                        value: `${device.deviceType} (${device.os} • ${device.browser})`,
                        inline: true
                    },
                    {
                        name: "📐 Screen Resolution",
                        value: device.screen,
                        inline: true
                    },
                    {
                        name: "🕒 Local Timezone",
                        value: `${device.timezone} (${new Date().toLocaleTimeString()})`,
                        inline: true
                    }
                ],
                footer: {
                    text: "GamersCraft Real-Time Telemetry • Cloudflare Edge"
                },
                timestamp: new Date().toISOString()
            }
        ]
    };

    if (CONFIG.enableConsoleLogs) {
        console.log(
            `%c[GamersCraft Telemetry]%c Visitor connected from %c${locationString}%c (${device.deviceType})`,
            'color: #70e000; font-weight: 700;',
            'color: #f1f3f5;',
            'color: #9ef01a; font-weight: bold;',
            'color: #94a3b8;'
        );
    }

    await dispatchDiscordPayload(discordPayload);
}

/**
 * Dispatch Custom Interaction Events (Drop a GG, Book a Chat, Resume Download, etc.)
 */
export async function sendCustomEventTelemetry(eventType, eventData = {}) {
    const device = getDeviceDetails();
    const tracking = getTrackingTags();
    const geo = await fetchGeoLocation();

    let title = "⚡ Interaction Event";
    let color = 0x0284c7; // Cyan
    let description = "";

    if (eventType === 'GG_NOTE_TRANSMITTED') {
        title = "🎮 GG Note Transmitted from Visitor!";
        color = 0x70e000; // Lime
        description = `**Reaction:** ${eventData.reaction || '🎮 GG'}\n**From:** ${eventData.name || 'Anonymous Gamer'}\n**Contact:** \`${eventData.contact || 'No contact provided'}\`\n**Message:**\n> ${eventData.message || '(No extra note)'}`;
    } else if (eventType === 'CHAT_BOOKING_REQUEST') {
        title = "📅 Meeting / Chat Request Submitted!";
        color = 0xe11d48; // Pink/Red
        description = `**Topic:** ${eventData.topic || 'General Project Discussion'}\n**Name:** ${eventData.name || 'Visitor'}\n**Contact Email/Discord:** \`${eventData.contact || 'Not provided'}\`\n**Note / Availability:**\n> ${eventData.notes || 'Ready to connect'}`;
    } else if (eventType === 'RESUME_CLICK') {
        title = "📄 Resume / Asset Breakdown Clicked";
        color = 0x38b000;
        description = `A visitor clicked to inspect your resume or case studies.`;
    } else if (eventType === 'MODE_SWITCH') {
        title = `🕹️ Switched to ${eventData.mode || '3D Game'} Mode`;
        color = 0x0284c7;
        description = `Visitor transitioned viewport mode.`;
    }

    const payload = {
        username: "GamersCraft Telemetry",
        embeds: [
            {
                title,
                color,
                description,
                fields: [
                    {
                        name: "📍 Visitor Origin",
                        value: `${geo.flag} ${geo.city}, ${geo.country}`,
                        inline: true
                    },
                    {
                        name: "💻 Device",
                        value: `${device.os} • ${device.browser}`,
                        inline: true
                    },
                    {
                        name: "🎯 Tracking Ref",
                        value: tracking.refTag || "Organic Visit",
                        inline: true
                    }
                ],
                footer: {
                    text: "GamersCraft Instant Action Alert"
                },
                timestamp: new Date().toISOString()
            }
        ]
    };

    return await dispatchDiscordPayload(payload);
}

// Automatically start telemetry tracker on import
if (typeof window !== 'undefined') {
    // Wait slightly after DOM is interactive to not block primary 3D / animation bootstrap
    setTimeout(() => {
        trackSessionVisit();
    }, 1200);
}
