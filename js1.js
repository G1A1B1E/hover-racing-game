function UnityProgress(e, s) {
  e.Module &&
    (e.logo ||
      ((e.logo = document.createElement("div")),
      (e.logo.className = "logo " + e.Module.splashScreenStyle),
      e.container.appendChild(e.logo)),
    e.progress ||
      ((e.progress = document.createElement("div")),
      (e.progress.className = "progress " + e.Module.splashScreenStyle),
      (e.progress.empty = document.createElement("div")),
      (e.progress.empty.className = "empty"),
      e.progress.appendChild(e.progress.empty),
      (e.progress.full = document.createElement("div")),
      (e.progress.full.className = "full"),
      e.progress.appendChild(e.progress.full),
      e.container.appendChild(e.progress)),
    (e.progress.full.style.width = 100 * s + "%"),
    (e.progress.empty.style.width = 100 * (1 - s) + "%"),
    1 == s && (e.logo.style.display = e.progress.style.display = "none"));
}
