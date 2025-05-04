"use client";

import { useState } from "react";
import StudentWrapper from "@/components/student-wrapper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/seperator";
import { Minus, Plus, X, Tag } from "lucide-react";
import Footer from "@/components/footer";
import Image from "next/image";
export default function CourseDetail() {
  // Initial cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "STEM Diploma in Technology Programs",
      price: 5000.0,
      quantity: 1,
      image: "/student/cart/image1.png",
    },
    {
      id: 2,
      name: "Scratch Programming and Animation",
      price: 5000.0,
      quantity: 1,
      image: "/student/cart/image2.png",
    },
  ]);

  // Calculate subtotal, tax, and total
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  // State for coupon input
  const [couponCode, setCouponCode] = useState("");

  // Handle quantity change
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Handle remove item
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

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
          <div className="text-3xl font-bold">Cart</div>
          <div className="flex gap-4 text-lg items-center">
            <div>Home</div>
            <div className="h-1 w-1 bg-[#d9d9d9] rounded-full" />
            <div className="text-yellow-400">Cart</div>
          </div>
        </div>

        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 gap-6">
            {/* Cart Items Section */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#fff3f6] text-gray-700">
                      <tr>
                        <th className="p-4 text-left w-12">S.N.</th>
                        <th className="p-4 text-left">Image</th>
                        <th className="p-4 text-left">Course Name</th>
                        <th className="p-4 text-left">Quantity</th>
                        <th className="p-4 text-left">Price</th>
                        <th className="p-4 text-left">Subtotal</th>
                        <th className="p-4 w-10"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <tr key={item.id} className="border-b">
                          <td className="p-4">{index + 1}</td>
                          <td className="p-4">
                            <Image
                              src={item.image}
                              alt={item.name}
                              className="object-cover rounded"
                              width={64}
                              height={64}
                              priority
                            />
                          </td>
                          <td className="p-4 text-blue-600 font-medium">
                            {item.name}
                          </td>
                          <td className="p-4">
                            <div className="flex items-center">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <div className="w-10 text-center">
                                {item.quantity}
                              </div>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </td>
                          <td className="p-4">₹{item.price.toFixed(2)}</td>
                          <td className="p-4">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </td>
                          <td className="p-4">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => removeItem(item.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <CardFooter className="flex justify-start p-4 h-fit">
                  <Button
                    variant="outline"
                    className="border-[#3366ff] text-lg text-[#3366ff] px-8 py-6 hover:text-white hover:bg-[#3366ff]"
                  >
                    Update Cart
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Summary Section */}
            <div className="lg:col-span-1 grid lg:grid-cols-[1fr_auto] grid-cols-1 gap-x-4">
              {/* Coupon Card */}
              <Card className="mb-6 bg-yellow-50 h-fit border-yellow-100 col-span-1">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Tag className="mr-2 h-5 w-5" /> Coupon
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button
                      variant="secondary"
                      className="whitespace-nowrap bg-pink-500 text-white hover:bg-pink-600"
                    >
                      Apply coupon
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Cart Total Card */}
              <Card className="overflow-hidden w-xl">
                <CardHeader className="bg-pink-50 p-4">
                  <CardTitle className="text-lg">Cart Total</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>₹{tax.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-pink-600">
                      <span>Total</span>
                      <span>₹{total.toFixed(2)}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-[#3366ff] text-lg py-6">
                    Proceed to checkout
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* <Footer /> */}
      </div>

      <Footer />
    </StudentWrapper>
  );
}
