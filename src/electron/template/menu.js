const MenuTemplate = [
  {
    label: "File",
    submenu: [
      { label: "Open" },
      { label: "Save", click: () => console.log("Save clicked") },
      { type: "separator" },
      { label: "Exit", role: "quit" },
    ],
  },
  {
    label: "Edit",
    submenu: [
      { label: "Undo", role: "undo" },
      { label: "Redo", role: "redo" },
      { type: "separator" },
      { label: "Cut", role: "cut" },
      { label: "Copy", role: "copy" },
      { label: "Paste", role: "paste" },
    ],
  },
  {
    label: "View",
    submenu: [
      { role: "reload" },
      { role: "toggledevtools" },
      { type: "separator" },
      { role: "resetzoom" },
      { role: "zoomin" },
      { role: "zoomout" },
      { type: "separator" },
      { role: "togglefullscreen" },
    ],
  },
  {
    label: "Custom",
    submenu: [
      { label: "About", click: () => console.log("About clicked") },
      { label: "Preferences", click: () => console.log("Preferences clicked") },
    ],
  },
];

export default MenuTemplate;
