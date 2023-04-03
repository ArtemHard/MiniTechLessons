let fetch = (url) => {
  return new Promise((res, rej) => {
    switch (url) {
      case "google": {
        setTimeout(() => {
          res({ data: "from google" });
        }, 3000);
        break;
      }
      case "microsoft": {
        setTimeout(() => {
          res({ data: "from microsoft" });
        }, 2000);
        break;
      }
      case "it-Incubator": {
        setTimeout(() => {
          res({ data: "from it-Incubator" });
        }, 300);
        break;
      }
      default: {
        setTimeout(() => {
          res({ data: "from unknown resourse" });
        }, 300);
        break;
      }
    }
  });
};
fetch("google").then((res) => console.log(res.data));
fetch("microsoft").then((res) => console.log(res.data));
fetch("it-Incubator").then((res) => console.log(res.data));
fetch("xxx").then((res) => console.log(res.data));
