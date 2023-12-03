export default function toTitleCase(str) {
  return str
    .replace(/-/g, " ") // remove hyphens
    .replace(/([^\W_]+[^\s-]*) */g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
