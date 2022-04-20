const UserController = require("./Controllers/UserController");
const EmployeeController = require("./Controllers/EmployeeController");
const ItemController = require("./Controllers/ItemController");
const OrderController = require("./Controllers/OrderController");
const InstallmentController = require("./Controllers/InstallmentController");
const DailyInputController = require("./Controllers/DailyInputController");

const user = [
  {
    method: "get",
    path: "/user/get",
    controller: UserController.Get,
  },
  {
    method: "post",
    path: "/user/add",
    controller: UserController.Add,
  },
  {
    method: "put",
    path: "/user/update",
    controller: UserController.Update,
  },
  {
    method: "post",
    path: "/user/delete",
    controller: UserController.Delete,
  },
];

const employee = [
  {
    method: "get",
    path: "/employee/get",
    controller: EmployeeController.Get,
  },
  {
    method: "post",
    path: "/employee/add",
    controller: EmployeeController.Add,
  },
  {
    method: "put",
    path: "/employee/update",
    controller: EmployeeController.Update,
  },
  {
    method: "post",
    path: "/employee/delete",
    controller: EmployeeController.Delete,
  },
];

const item = [
  {
    method: "get",
    path: "/item/get",
    controller: ItemController.Get,
  },
  {
    method: "post",
    path: "/item/add",
    controller: ItemController.Add,
  },
  {
    method: "put",
    path: "/item/update",
    controller: ItemController.Update,
  },
  {
    method: "post",
    path: "/item/delete",
    controller: ItemController.Delete,
  },
];

const order = [
  {
    method: "get",
    path: "/order/get",
    controller: OrderController.Get,
  },
  {
    method: "post",
    path: "/order/add",
    controller: OrderController.Add,
  },
  {
    method: "put",
    path: "/order/update",
    controller: OrderController.Update,
  },
  {
    method: "post",
    path: "/order/delete",
    controller: OrderController.Delete,
  },
];

const installment = [
  {
    method: "get",
    path: "/installment/get",
    controller: InstallmentController.Get,
  },
  {
    method: "post",
    path: "/installment/add",
    controller: InstallmentController.Add,
  },
  {
    method: "put",
    path: "/installment/update",
    controller: InstallmentController.Update,
  },
  {
    method: "put",
    path: "/installment/update-status",
    controller: InstallmentController.UpdateStatus,
  },
  {
    method: "post",
    path: "/installment/delete",
    controller: InstallmentController.Delete,
  },
];

const dailyInput = [
  {
    method: "get",
    path: "/daily-input/get",
    controller: DailyInputController.Get,
  },
  {
    method: "post",
    path: "/daily-input/add",
    controller: DailyInputController.Add,
  },
  {
    method: "put",
    path: "/daily-input/update",
    controller: DailyInputController.Update,
  },
  {
    method: "post",
    path: "/daily-input/delete",
    controller: DailyInputController.Delete,
  },
];

const routes = [...user, ...employee, ...item, ...order, ...installment, ...dailyInput];

module.exports = routes;
