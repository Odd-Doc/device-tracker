import axios from "axios";
import data from "../data.json";
import { Device } from "../../server/models/device.model";
import { FacilityImport } from "../../server/models/facilityImport.model";
// const API_BASE = process.env.EXPO_PUBLIC_NGROCK_URL;
const API_BASE = "http://localhost:3001";

const result = [];
const companies = [];

const preProcessData = (data) => {
  // axios
  //   .get(API_BASE + "/facilities/search")
  //   .then(() => {
  //     //hazards data
  //     console.log("found facility...");
  for (let i = 0; i < data.length; i++) {
    var tempFacility = new FacilityImport();
    for (const key in data[i]) {
      switch (key) {
        case "sites_locationid":
          if (!companies.includes(data[i][key]))
            tempFacility.locationid = data[i][key];
          break;
        case "sites_company":
          tempFacility.company = data[i][key];
          break;
        case "sites_address":
          tempFacility.address = data[i][key];
          break;
        case "sites_city":
          tempFacility.city = data[i][key];
          break;
        case "sites_state":
          tempFacility.state = data[i][key];
          break;
        case "sites_zip":
          tempFacility.zip = data[i][key];
          break;
        case "sitemailing_phone":
          tempFacility.phone = data[i][key];
          break;
        default:
          break;
      }
      tempFacility.devices = [];
      companies.push(tempFacility);
    }
  }
};
const filterOutUniqueSites = () => {
  var filteredCompanies = [];
  for (let j = 0; j < companies.length; j++) {
    const prevIndex = companies[j - 1];
    //hydrate new filtered array
    if (filteredCompanies.length == 0) {
      filteredCompanies.push(companies[j]);
    }
    if (
      prevIndex != undefined &&
      prevIndex.locationid != companies[j].locationid
    ) {
      //push non-duplicates to new array -> confirmed this is accurate list of indexes
      filteredCompanies.push(companies[j]);
    }
  }
  return filteredCompanies;
};
const hydrateDevices = (filteredArray, raw) => {
  console.log("filter complete -> being hydration");

  for (let i = 0; i < filteredArray.length; i++) {
    // console.log(filteredArray[i]);
    for (const filteredKey in filteredArray[i]) {
      if (filteredKey == "locationid") {
        // track current filtered facility in loops
        var filteredId = filteredArray[i][filteredKey];
        for (let j = 0; j < raw.length; j++) {
          for (const rawKey in raw[j]) {
            // track current raw facility in loops
            var rawId = raw[j][rawKey];
            if (rawKey == "sites_locationid") {
              if (filteredId == rawId) {
                console.log(`adding a device to ${filteredId}`);
              }
            }
          }
        }
      }
    }
  }
};
// locationid: { type: Number },
// company: { type: String },
// address: { type: String },
// city: { type: String },
// state: { type: String },
// zip: { type: String },
// phone: { type: String },
// devices: { type: [Device.schema], required: false },

preProcessData(data.hazards);
filterOutUniqueSites();
hydrateDevices(filterOutUniqueSites(), data.hazards);

// filteredCompanies.forEach((element) => {
//   console.log(element);
// });

// axios
//   .post(API_BASE + "/facility/newImport", {
//     name: keyName,
//     street: ,
//     city: { type: String },
//     state: { type: String },
//     zip: { type: Number },
//     locationId: { type: Number },
//     devices: { type: [Device.schema], required: false },
//   })
//   .then(console.log("importing..."))
//   .catch((err) => {
//     console.error(err);
//   });
