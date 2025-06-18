"use client";

import StudentWrapper from "@/components/student-wrapper";
import FooterNew from "@/components/footer3";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CreditCard, ArrowLeft, Lock } from "lucide-react";
import { FaBuildingColumns } from "react-icons/fa6";

export default function CourseDetail() {
  const [selectedPayment, setSelectedPayment] = useState("cards");
  const [saveCard, setSaveCard] = useState(true);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [cardDetails, setCardDetails] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  const orderSummary = {
    originalPrice: 9500,
    discount: 1000,
    discountPercent: 10,
    courses: 2,
    total: 8500,
  };

  const courseDetails = [
    { name: "STEM Diploma in Technology Programs", price: 4000 },
    { name: "Scratch Programming and Animation", price: 4500 },
  ];

  const formatPrice = (price: number) => `₹ ${price.toLocaleString()}`;

  interface CardDetails {
    name: string;
    number: string;
    expiry: string;
    cvv: string;
  }

  // interface OrderSummary {
  //   originalPrice: number;
  //   discount: number;
  //   discountPercent: number;
  //   courses: number;
  //   total: number;
  // }

  // interface CourseDetailItem {
  //   name: string;
  //   price: number;
  // }

  const handleInputChange = (field: keyof CardDetails, value: string) => {
    setCardDetails((prev: CardDetails) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <StudentWrapper blue>
      <div className="bg-white border-b">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <ArrowLeft className="w-6 h-6 text-gray-600 mr-3 cursor-pointer hover:text-gray-800" />
            <h1 className="text-2xl font-medium text-[#FF3366]">Checkout</h1>
          </div>
        </div>
      </div>

      <div className="bg-[#EEEEEE] mx-auto w-full py-8 space-y-6 px-16 pb-70">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Section - Billing & Payment */}
            <div className="lg:col-span-2 space-y-6">
              {/* Billing Address */}
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-5">
                  <h2 className="text-2xl font-medium text-gray-900 mb-6">
                    Billing Address
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="country"
                        className="text-base font-medium"
                      >
                        Country
                      </Label>
                      <Select value={country} onValueChange={setCountry}>
                        <SelectTrigger className="h-12 rounded-full border-gray-300 w-full bg-[#F9FAFB]">
                          <SelectValue placeholder="Option 1" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="india">India</SelectItem>
                          <SelectItem value="usa">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state" className="text-base font-medium">
                        State / Union
                      </Label>
                      <Select value={state} onValueChange={setState}>
                        <SelectTrigger className="h-12 rounded-full border-gray-300 w-full bg-[#F9FAFB]">
                          <SelectValue placeholder="Option 1" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rajasthan">Rajasthan</SelectItem>
                          <SelectItem value="maharashtra">
                            Maharashtra
                          </SelectItem>
                          <SelectItem value="delhi">Delhi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    Eudunique is obligated to comply with local tax regulations
                    and may collect applicable transaction taxes on purchases
                    made in regions where such laws are enforced.
                  </p>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-6">
                    <Lock className="w-5 h-5" />
                    <h2 className="text-2xl font-medium">Payment Method</h2>
                  </div>

                  <RadioGroup
                    value={selectedPayment}
                    onValueChange={setSelectedPayment}
                    className="space-y-4"
                  >
                    {/* Cards Option */}
                    <div className="space-y-4 border-[#E5E7EB] bg-[#F9FAFB] border rounded-2xl lg:max-w-[600px] overflow-hidden">
                      <div className="flex items-center justify-between p-4 bg-[#F9FAFB]">
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem
                            value="cards"
                            id="cards"
                            className="text-blue-600"
                          />
                          <Label
                            htmlFor="cards"
                            className="text-lg font-medium text-gray-900"
                          >
                            Cards
                          </Label>
                        </div>
                        <div className="py-1 px-4 bg-[#0000001A] rounded-lg">
                          <CreditCard className="w-6 h-6" />
                        </div>
                      </div>

                      {selectedPayment === "cards" && (
                        <div className="space-y-4 pl-4 pr-4 pb-4">
                          <div className="space-y-2">
                            <Label
                              htmlFor="cardName"
                              className="text-lg font-medium"
                            >
                              Name on Card
                            </Label>
                            <Input
                              id="cardName"
                              placeholder="Text"
                              value={cardDetails.name}
                              onChange={(e) =>
                                handleInputChange("name", e.target.value)
                              }
                              className="h-12 rounded-full focus:bg-white bg-[#F9FAFB] border-gray-300"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label
                              htmlFor="cardNumber"
                              className="text-lg font-medium"
                            >
                              Card Number
                            </Label>
                            <Input
                              id="cardNumber"
                              placeholder="Text"
                              value={cardDetails.number}
                              onChange={(e) =>
                                handleInputChange("number", e.target.value)
                              }
                              className="h-12 rounded-full focus:bg-white bg-[#F9FAFB] border-gray-300"
                            />
                            <img
                              alt="payment modes"
                              src="/student/checkout/payment_modes.png"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-16">
                            <div className="space-y-2">
                              <Label
                                htmlFor="expiry"
                                className="text-lg font-medium"
                              >
                                Expire Date
                              </Label>
                              <Input
                                id="expiry"
                                placeholder="Text"
                                value={cardDetails.expiry}
                                onChange={(e) =>
                                  handleInputChange("expiry", e.target.value)
                                }
                                className="h-12 bg-[#F9FAFB] focus:bg-white rounded-full border-gray-300"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label
                                htmlFor="cvv"
                                className="text-lg font-medium"
                              >
                                CVC / CVV
                              </Label>
                              <Input
                                id="cvv"
                                placeholder="Text"
                                value={cardDetails.cvv}
                                onChange={(e) =>
                                  handleInputChange("cvv", e.target.value)
                                }
                                className="h-12 bg-[#F9FAFB] focus:bg-white rounded-full border-gray-300"
                              />
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Checkbox
                              id="saveCard"
                              checked={saveCard}
                              onCheckedChange={(checked) =>
                                setSaveCard(checked === true)
                              }
                              className="rounded-full w-6 h-6 border-2 border-yellow-400 data-[state=checked]:bg-yellow-400 -translate-y-1"
                            />
                            <Label
                              htmlFor="saveCard"
                              className="text-base text-[#6B7280]"
                            >
                              Save for future purchases
                            </Label>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* UPI Option */}
                    <div className="flex items-center justify-between p-4 border rounded-2xl border-[#E5E7EB] bg-[#F9FAFB] lg:max-w-[600px]">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="upi" id="upi" />
                        <Label
                          htmlFor="upi"
                          className="text-lg font-medium text-gray-900"
                        >
                          UPI
                        </Label>
                      </div>
                      <div className="text-gray-400 font-bold text-sm">
                        <img
                          alt="upi"
                          src="/student/checkout/upi.png"
                          className="w-[60px]"
                        />
                      </div>
                    </div>

                    {/* Net Banking Option */}
                    <div className="flex items-center justify-between p-4 border rounded-2xl border-[#E5E7EB] bg-[#F9FAFB] lg:max-w-[600px]">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="netbanking" id="netbanking" />
                        <Label
                          htmlFor="netbanking"
                          className="text-lg font-medium text-gray-900"
                        >
                          Net Banking
                        </Label>
                      </div>
                      <div className="py-1 px-4 bg-[#0000001A] rounded-lg">
                        <FaBuildingColumns className="w-5 h-5" />
                      </div>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>

            {/* Right Section - Order Summary & Details */}
            <div className="space-y-6">
              {/* Order Summary */}
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-5">
                  <h2 className="text-2xl font-medium mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="font-main text-gray-700">
                        Original Price
                      </span>
                      <span className="font-medium">
                        {formatPrice(orderSummary.originalPrice)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-main">
                        Discount ( {orderSummary.discountPercent} % off )
                      </span>
                      <span className="font-medium">
                        - {formatPrice(orderSummary.discount)}
                      </span>
                    </div>

                    <hr className="border border-[#6B7280]" />

                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">
                        Total ( {orderSummary.courses} courses )
                      </span>
                      <span className="font-semibold">
                        {formatPrice(orderSummary.total)}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full h-12 bg-[#3366FF] cursor-pointer hover:bg-blue-700 text-white rounded-2xl text-lg font-bold">
                    Proceed
                  </Button>

                  <div className="mt-6 p-4 border border-[#F3F4F6] bg-[#F9FAFB] rounded-2xl">
                    <div className="flex items-start gap-3">
                      <img
                        alt="spoke image"
                        src="/student/checkout/spoke_circle.svg"
                        className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          Unlock Your Potential Today
                        </h4>
                      </div>
                    </div>
                    <p className="text-sm font-main leading-relaxed">
                      Join 50 learners from your country who&#39;ve enrolled in
                      this course in the past 24 hours!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Order Details */}
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-5 space-y-6">
                  <h2 className="text-2xl font-medium">Order Details</h2>

                  <div className="space-y-4">
                    {courseDetails.map((course, index) => (
                      <div
                        key={index}
                        className="flex justify-between border border-[#E5E7EB] bg-[#F9FAFB] px-4 rounded-full items-start py-3"
                      >
                        <span className="text-black flex-1">Course Name</span>
                        <span className="font-medium whitespace-nowrap">
                          {formatPrice(course.price)}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <FooterNew />
    </StudentWrapper>
  );
}
