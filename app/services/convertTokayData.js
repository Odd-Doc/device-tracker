import data from "../data.json";

const convert = (data) => {
  for (let i = 0; i < data.length; i++) {
    var companyName;
    for (const key in data[i]) {
      if (key == "sites_company") {
        console.log(`${data[i][key]}`);
      }
    }
  }
};
// convert(data);
