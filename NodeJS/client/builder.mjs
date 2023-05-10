// const scripts = ["1.js", "2.js", "3.js"];
// const styles = ["1.css", "2.css", "3.css"];

// const scriptsBuilder = (files) => {
//   files.forEach((filePath) => {
//     const script = document.createElement("script");
//     script.src = filePath;
//     document.body.appendChild(script);
//   });
// };

// const stylesBuilder = (files) => {
//   files.forEach((filePath) => {
//     const link = document.createElement("link");
//     link.rel = "stylesheet";
//     link.href = filePath;
//     document.head.appendChild(link);
//   });
// };

// scriptsBuilder(scripts);
// stylesBuilder(styles);

const components = ["cars", "users", "projects"];

// window.onload = () => {
//   alert(`!!!! ${window.location.pathname}`);
// };

const builder = (components) => {
  components.forEach((componentName) => {
    // connecting of script
    // const script = document.createElement("script");
    // script.src = `./${componentName}/${componentName}.js`;
    // document.body.appendChild(script);

    // // connecting of css
    // const link = document.createElement("link");
    // link.rel = "stylesheet";
    // link.href = `./${componentName}/${componentName}.css`;
    // document.head.appendChild(link);

    // connecting of html (routes)
    const a = document.createElement("a");
    a.href = `./${componentName}/${componentName}.html`;
    a.textContent = componentName;
    document.querySelector("nav").appendChild(a);
  });
};

export const connectComponentSources = (componentName) => {
  const script = document.createElement("script");
  script.src = `${componentName}.js`;
  document.body.appendChild(script);

  // connecting of css
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `${componentName}.css`;
  document.head.appendChild(link);
};

builder(components);
