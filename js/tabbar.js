const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

let selectedTab = "tab-1";

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Clicked button:", btn); // Log the clicked button
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabPanels.forEach((panel) => panel.classList.remove("on"));

    btn.classList.add("active");
    const tabId = btn.getAttribute("data-tab");
    console.log("Target panel ID:", tabId); // Log the target panel ID
    const targetPanel = document.getElementById(tabId);
    targetPanel.classList.add("on");
    console.log(targetPanel);
  });
});
