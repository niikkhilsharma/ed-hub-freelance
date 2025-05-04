"use client";

import { useState } from "react";
import StudentWrapper from "@/components/student-wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Footer from "@/components/footer";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
export default function CourseDetail() {
  // Sample order data
  const orderItems = [
    {
      id: 1,
      name: "STEM Diploma in Technology Programs",
      price: 5000.0,
      quantity: 1,
    },
    {
      id: 2,
      name: "Scratch Programming and Animation",
      price: 5000.0,
      quantity: 1,
    },
  ];

  // Calculate totals
  const subtotal = orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = 1000.0;
  const total = subtotal + tax;

  // State for payment method
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  return (
    <StudentWrapper>
      {/* Background */}
      <div
        className="fixed inset-0 bg-center bg-repeat z-0"
        style={{
          backgroundImage: "url('/Background2.png')",
          backgroundSize: "400px",
          filter: "grayscale(10%) brightness(1.1) blur(0.5px)",
          opacity: 0.08,
        }}
      ></div>

      <div className="relative z-10 pb-40">
        {/* headers */}
        <div className="bg-[#f9326f] text-white h-40 gap-4 flex flex-col items-center justify-center">
          <div className="text-3xl font-bold">Checkout</div>
          <div className="flex gap-4 text-lg items-center">
            <div>Home</div>
            <div className="h-1 w-1 bg-[#d9d9d9] rounded-full" />
            <div className="text-yellow-400">Checkout</div>
          </div>
        </div>

        <div className="container mx-auto py-6 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Billing Details */}
            <div>
              <h2 className="text-xl font-semibold mb-6">Billing Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="first-name" className="block mb-2 text-sm">
                    First Name
                  </Label>
                  <Select>
                    <SelectTrigger id="first-name">
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mr">Mr.</SelectItem>
                      <SelectItem value="mrs">Mrs.</SelectItem>
                      <SelectItem value="ms">Ms.</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="last-name" className="block mb-2 text-sm">
                    Last Name
                  </Label>
                  <Select>
                    <SelectTrigger id="last-name">
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sir">Sir</SelectItem>
                      <SelectItem value="lady">Lady</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-4">
                <Label htmlFor="country" className="block mb-2 text-sm">
                  Country
                </Label>
                <Select>
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in">India</SelectItem>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-4">
                <Label htmlFor="address" className="block mb-2 text-sm">
                  Address
                </Label>
                <Input
                  id="address"
                  placeholder="Street address"
                  className="mb-2"
                />
                <Input
                  id="address-2"
                  placeholder="Apartment, suite, unit etc. (optional)"
                />
              </div>

              <div className="mb-4">
                <Label htmlFor="town" className="block mb-2 text-sm">
                  Town / City
                </Label>
                <Select>
                  <SelectTrigger id="town">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="state" className="block mb-2 text-sm">
                    State
                  </Label>
                  <Select>
                    <SelectTrigger id="state">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="postcode" className="block mb-2 text-sm">
                    Postcode / Zip
                  </Label>
                  <Input id="postcode" placeholder="Select Postcode / Zip" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div>
                  <Label htmlFor="email" className="block mb-2 text-sm">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter Email Address"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="block mb-2 text-sm">
                    Phone
                  </Label>
                  <Input id="phone" placeholder="Enter Phone Number" />
                </div>
              </div>

              <div className="flex items-start mb-6">
                <Checkbox id="shipping-address" className="mt-0.5 rounded-sm" />
                <Label htmlFor="shipping-address" className="ml-2 text-sm">
                  Ship to a different address?
                </Label>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="border rounded-none shadow-sm">
                <div className="bg-pink-50 p-4 border-b">
                  <h2 className="text-xl font-semibold">Your Order</h2>
                </div>

                <div className="p-6 bg-white">
                  <div className="grid grid-cols-2 gap-2 text-gray-700 pb-2">
                    <div>Product</div>
                    <div className="text-right">Total</div>
                  </div>

                  {orderItems.map((item) => (
                    <div
                      key={item.id}
                      className="grid grid-cols-2 gap-2 py-4 border-b"
                    >
                      <div>
                        {item.name} × {item.quantity}
                      </div>
                      <div className="text-right">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}

                  <div className="grid grid-cols-2 gap-2 py-4 border-b">
                    <div>Subtotal</div>
                    <div className="text-right">₹{subtotal.toFixed(2)}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 py-4 border-b">
                    <div>Shipping</div>
                    <div className="text-right text-green-500">Free</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 py-4 border-b">
                    <div>Tax</div>
                    <div className="text-right">₹{tax.toFixed(2)}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 py-4 border-b font-bold">
                    <div>Total</div>
                    <div className="text-right">₹{total.toFixed(2)}</div>
                  </div>

                  <h3 className="font-semibold mt-8 mb-4">Payment Method</h3>

                  <RadioGroup
                    defaultValue="credit-card"
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                    className="space-y-4"
                  >
                    <div className="flex items-center border rounded p-3 cursor-pointer">
                      <RadioGroupItem
                        value="credit-card"
                        id="credit-card"
                        className="rounded-full"
                      />
                      <Label
                        htmlFor="credit-card"
                        className="flex-1 ml-2 cursor-pointer"
                      >
                        Credit Card
                      </Label>
                      <div className="flex space-x-1">
                        <Image
                          src={"/student/checkout/image1.png"}
                          alt="loading..."
                          priority
                          width={200}
                          height={200}
                        />
                      </div>
                    </div>

                    <div className="flex items-center border rounded p-3 cursor-pointer">
                      <RadioGroupItem
                        value="upi"
                        id="upi"
                        className="rounded-full"
                      />
                      <Label
                        htmlFor="upi"
                        className="flex-1 ml-2 cursor-pointer"
                      >
                        UPI
                      </Label>
                      <Image
                        src="/student/checkout/upi.png"
                        alt="UPI"
                        priority
                        width={60}
                        height={60}
                      />
                    </div>
                  </RadioGroup>

                  {paymentMethod === "credit-card" ? (
                    <div className="mt-4 space-y-4">
                      <div>
                        <Label
                          htmlFor="card-name"
                          className="block mb-2 text-sm"
                        >
                          Name on Card
                        </Label>
                        <Input
                          id="card-name"
                          placeholder="0000 0000 0000 0000"
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="card-number"
                          className="block mb-2 text-sm"
                        >
                          Card Number
                        </Label>
                        <Input
                          id="card-number"
                          placeholder="0000 0000 0000 0000"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label
                            htmlFor="expiry"
                            className="block mb-2 text-sm"
                          >
                            Expiry Date
                          </Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div>
                          <Label htmlFor="cvv" className="block mb-2 text-sm">
                            Security Code
                          </Label>
                          <Input id="cvv" placeholder="Enter" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-4">
                      <Label htmlFor="upi-id" className="block mb-2 text-sm">
                        UPI ID
                      </Label>
                      <Input id="upi-id" placeholder="name@upi" />
                    </div>
                  )}

                  <Button className="w-full mt-8 bg-blue-600 hover:bg-blue-700">
                    Place order
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </StudentWrapper>
  );
}
