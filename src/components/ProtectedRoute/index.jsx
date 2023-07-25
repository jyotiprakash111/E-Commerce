import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ element: Element }) => {
  const { pathname } = useLocation();
  const id = localStorage.getItem("id");

  if (
    !id &&
    [
      "/",
      "/dashboardone",
      "/dashboardtwo",
      "/dashboardthree",
      "/dashboardsubcrible",
      "/dashboardrechargemoney",
      "/dashboardpaymentsuccessful",
      "/calendarmonth",
      "/calendardaynoevent",
      "/calendarday1event",
      "/calendarweek",
      "/createeventpopup",
      "/filemanagementdefault",
      "/tracktasks",
      "/conversation",
      "/profile",
      "/settings",
      "/customer",
      "/ekycbegin",
      "/ekycintroductionstepone",
      "/ekycscanidcard",
      "/ekycscanidcardaddimage",
      "/ekycintroductionsteptwo",
      "/ekycscanface",
      "/ekycintroductionstepthree",
      "/ekycconfirminformation",
      "/ekycintroductionstepfour",
      "/ekycsignature",
      "/ekycsuccessful",
      "/shopsearch",
      "/shopreviews",
      "/cartempty",
      "/cart",
      "/shippinginfo",
      "/paymentinfo",
      "/checkoutinprocess",
      "/checkoutsuccessful",
      "/cartproductlist",
      "/deletepopup",
      "/nopromotionpopup",
      "/addproduct",
    ].includes(pathname)
  ) {
    return <Navigate to="/dhiwise-dashboard" />;
  }
  return <Element />;
};
