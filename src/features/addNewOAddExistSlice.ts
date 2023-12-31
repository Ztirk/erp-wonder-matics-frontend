import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddNewOAddExist } from "../interface/reduxType";
import { SendPerson } from "../interface/personType";
import { SendCustomer } from "../interface/customerType";
import { SendAddress } from "../interface/addressType";
import { SendVehicle, SendVehicleShape } from "../interface/vehicleType";
import { SendFleetShape } from "../interface/fleetType";
import { SendContact, SendContactShape } from "../interface/contactType";

const initialState: AddNewOAddExist = {
  customerNew: [],
  customerExist: [],
  addressNew: [],
  addressExist: [],
  contactNew: [],
  contactExist: [],
  personNew: [],
  personExist: [],
  vehicleNew: [],
  vehicleExist: [],
  fleetNew: [],
  fleetExist: [],
  documentCodeNew: [],
  cardNew: [],
};

const addNewOAddExistSlice = createSlice({
  name: "addNewOAddExist",
  initialState,
  reducers: {
    setCustomerNew(state, action: PayloadAction<SendCustomer>) {
      state.customerNew.push(action.payload);
    },
    removeCustomerNew(state, action: PayloadAction<string>) {
      state.customerNew = state.customerNew.filter(
        (data) => data.customer.customer_id !== action.payload
      );
    },
    setCustomerExist(state, action: PayloadAction<number>) {
      state.customerExist.push(action.payload);
    },
    removeCustomerExist(state, action: PayloadAction<number>) {
      state.customerExist = state.customerExist.filter(
        (id) => id !== action.payload
      );
    },
    setPersonNew(state, action: PayloadAction<SendPerson & SendContact>) {
      state.personNew.push(action.payload);
    },
    removePersonNew(state, action: PayloadAction<string>) {
      state.personNew = state.personNew.filter(
        (data) => data.person.person_id !== action.payload
      );
    },
    setPersonExist(state, action: PayloadAction<number>) {
      state.personExist.push(action.payload);
    },
    removePersonExist(state, action: PayloadAction<number>) {
      state.personExist = state.personExist.filter(
        (id) => id !== action.payload
      );
    },
    setAddressNew(state, action: PayloadAction<SendAddress["address"]>) {
      state.addressNew.push(action.payload);
    },
    removeAddressNew(state, action: PayloadAction<string>) {
      state.addressNew = state.addressNew.filter(
        (data) => data.address_id !== action.payload
      );
    },
    setAddressExist(state, action: PayloadAction<number>) {
      state.addressExist.push(action.payload);
    },
    removeAddressExist(state, action: PayloadAction<number>) {
      state.addressExist = state.addressExist.filter(
        (id) => id !== action.payload
      );
    },
    setVehicleNew(state, action: PayloadAction<SendVehicle["vehicle"]>) {
      state.vehicleNew.push(action.payload);
    },
    removeVehicleNew(state, action: PayloadAction<string>) {
      state.vehicleNew = state.vehicleNew.filter(
        (data) => data.vehicle_id !== action.payload
      );
    },
    setVehicleExist(state, action: PayloadAction<number>) {
      state.vehicleExist.push(action.payload);
    },
    removeVehicleExist(state, action: PayloadAction<number>) {
      state.vehicleExist = state.vehicleExist.filter(
        (id) => id !== action.payload
      );
    },
    setFleetNew(state, action: PayloadAction<SendFleetShape>) {
      state.fleetNew.push(action.payload);
    },
    removeFleetNew(state, action: PayloadAction<string>) {
      state.fleetNew = state.fleetNew.filter(
        (data) => data.fleet_id !== action.payload
      );
    },
    setFleetExist(state, action: PayloadAction<number>) {
      state.fleetExist.push(action.payload);
    },
    removeFleetExist(state, action: PayloadAction<number>) {
      state.fleetExist = state.fleetExist.filter((id) => id !== action.payload);
    },
    setContactNew(state, action: PayloadAction<SendContact["contact"]>) {
      state.contactNew.push(action.payload);
    },
    removeContactNew(state, action: PayloadAction<string>) {
      state.contactNew = state.contactNew.filter(
        (data) => data.contact_id !== action.payload
      );
    },
    setContactExist(state, action: PayloadAction<number>) {
      state.contactExist.push(action.payload);
    },
    removeContactExist(state, action: PayloadAction<number>) {
      state.contactExist = state.contactExist.filter(
        (id) => id !== action.payload
      );
    },
    setDocumentCodeNew(state, action: PayloadAction<number>) {
      state.documentCodeNew.push(action.payload);
    },
    removeDocumentCodeNew(state, action: PayloadAction<number>) {
      state.documentCodeNew = state.documentCodeNew.splice(action.payload, 1);
    },
    setCardNew(state, action: PayloadAction<>) {},
    removeCardNew(state, action: PayloadAction) {},
  },
});

export const {
  setAddressExist,
  setAddressNew,
  setContactNew,
  setCustomerExist,
  setCustomerNew,
  setFleetExist,
  setFleetNew,
  setPersonExist,
  setPersonNew,
  setVehicleExist,
  setVehicleNew,
  removeAddressExist,
  removeAddressNew,
  removeContactNew,
  removeCustomerExist,
  removeCustomerNew,
  removeFleetExist,
  removeFleetNew,
  removePersonExist,
  removePersonNew,
  removeVehicleExist,
  removeVehicleNew,
  removeContactExist,
  setContactExist,
  removeCardNew,
  removeDocumentCodeNew,
  setCardNew,
  setDocumentCodeNew,
} = addNewOAddExistSlice.actions;

export const addNewOAddExistState = (state) => state.addNewOAddExist;

export default addNewOAddExistSlice.reducer;
