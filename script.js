document.addEventListener("DOMContentLoaded", () => {
  const modelViewers = document.querySelectorAll("model-viewer"); // All <model-viewer> elements

  modelViewers.forEach((modelViewer) => {
    const hotspots = modelViewer.querySelectorAll(".Hotspot");

    hotspots.forEach((hotspot) => {
      hotspot.addEventListener("click", () => {
        const target = hotspot.getAttribute("data-position"); // Get target coordinates
        const normal = hotspot.getAttribute("data-normal"); // Optionally use normal for orientation

        // Update camera target and zoom level
        modelViewer.setAttribute("camera-target", target);
        modelViewer.setAttribute("field-of-view", "10deg"); // Adjust zoom level (smaller = closer)
        modelViewer.setAttribute("camera-orbit", "0deg 90deg auto"); // Optional for custom angles
      });
    });
  });
});
