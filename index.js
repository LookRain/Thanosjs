export default function thanos() {
  function getNodes() {
    var nodes = Array.prototype.slice.call(document.getElementsByTagName("*"), 0);
    var nodesToDelete = nodes.filter(function (elem) {
      return !elem.hasChildNodes() || elem.nodeName === 'SPAN' || elem.nodeName === 'IMG' || elem.nodeName === 'P' || elem.nodeName === 'H1' || elem.nodeName === 'H2' || elem.nodeName === 'H3' || elem.nodeName === 'A' || elem.nodeName === 'LI' || elem.nodeName === 'SVG';
    });
    return nodesToDelete;
  }
  const a = getNodes();
  a.forEach(i => {
    if (Math.random(1) > 0.5) {
      i.style.transition = 'all 1s ease'
      i.style.opacity = 0
    }
  }
  );
}