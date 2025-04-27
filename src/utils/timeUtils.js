export function convertTimeToHMS(isoTimeString) {
    const date = new Date(isoTimeString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Ensure single digits have a leading zero
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}h : ${formattedMinutes}m : ${formattedSeconds}s`;
}