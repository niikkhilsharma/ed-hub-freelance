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
import { Minus, Plus, X, Tag, ArrowLeft } from "lucide-react";
import Footer from "@/components/footer";
import Image from "next/image";
import FooterNew from "@/components/footer3";
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}
export default function CourseDetail() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
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

  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [discount, setDiscount] = useState(10);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountAmount = subtotal * (discount / 100);
  const discountedSubtotal = subtotal - discountAmount;
  const tax = discountedSubtotal * 0.1; // 10% tax
  const total = discountedSubtotal + tax;

  // Update quantity
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Apply coupon
  const applyCoupon = () => {
    const validCoupons: { [key: string]: number } = {
      SAVE10: 10,
      SAVE20: 20,
      WELCOME: 15,
      STUDENT: 25,
    };

    const upperCoupon = couponCode.toUpperCase();
    if (validCoupons[upperCoupon]) {
      setAppliedCoupon(upperCoupon);
      setDiscount(validCoupons[upperCoupon]);
      setCouponCode("");
    } else {
      alert("Invalid coupon code");
    }
  };

  // Remove coupon
  const removeCoupon = () => {
    setAppliedCoupon(null);
    setDiscount(0);
  };

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };
  return (
    <StudentWrapper blue>
      {/* Background */}
      <div
        className="fixed inset-0 bg-center bg-repeat z-0"
        style={{
          backgroundImage: "url('/Background2.png')",
          backgroundSize: "900px",
          filter: " brightness(1.1) blur(0.3px)",
          opacity: 0.6,
        }}
      ></div>
      <div className="bg-black fixed inset-0 bg-center bg-repeat z-1 opacity-40" />

      <div className="relative z-10 pb-70">
        {/* headers */}
        <div className="bg-white border-b">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center py-4">
              <ArrowLeft className="w-6 h-6 text-gray-600 mr-3 cursor-pointer hover:text-gray-800" />
              <h1 className="text-2xl font-semibold text-[#FF3366]">
                Course Name
              </h1>
            </div>
          </div>
        </div>

        <div className="container px-12 pt-8">
          <div className="flex flex-col mx-auto bg-white rounded-3xl gap-4">
            {/* Cart Items Section */}
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-3xl">
                <div className="overflow-x-auto mb-8">
                  <table className="w-full">
                    <thead className="bg-[#3366FF1A]">
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 pl-4 font-semibold text-gray-800">
                          S.N.
                        </th>
                        <th className="text-left py-4 px-2 font-semibold text-gray-800">
                          Product
                        </th>
                        <th className="text-left py-4 px-2 font-semibold text-gray-800">
                          Price
                        </th>
                        <th className="text-left py-4 px-2 font-semibold text-gray-800">
                          Quantity
                        </th>
                        <th className="text-left py-4 px-2 font-semibold text-gray-800">
                          Subtotal
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <tr key={item.id} className="border-t border-gray-100">
                          <td className="py-4 pl-4 text-gray-700 font-medium">
                            {index + 1}
                          </td>
                          <td className="py-4 px-2">
                            <div className="flex items-center gap-4">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                              />
                              <div>
                                <h3 className="font-medium text-blue-600 hover:text-blue-700 cursor-pointer">
                                  {item.name}
                                </h3>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-2 text-gray-700 font-medium">
                            {formatPrice(item.price)}
                          </td>
                          <td className="py-4 px-2">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                                disabled={item.quantity <= 1}
                              >
                                <Minus
                                  size={16}
                                  className={
                                    item.quantity <= 1
                                      ? "text-gray-400"
                                      : "text-gray-600"
                                  }
                                />
                              </button>
                              <div className="w-12 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-medium">
                                {item.quantity}
                              </div>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                              >
                                <Plus size={16} className="text-gray-600" />
                              </button>
                            </div>
                          </td>
                          <td className="py-6 px-2 text-gray-700 font-semibold">
                            {formatPrice(item.price * item.quantity)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-start h-fit">
                  <Button className="bg-[#3366ff] text-lg text-white px-8 py-6 hover:bg-[#0c45f0] hover:text-white rounded-full ml-6">
                    Explore More
                  </Button>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="flex flex-col lg:flex-row gap-8 p-6">
              {/* Left Section - Explore More & Coupon */}
              <div className="flex-1">
                <div className="rounded-2xl bg-[#E5E7EB] p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Coupon
                  </h3>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="bg-white flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                      onKeyPress={(e) => e.key === "Enter" && applyCoupon()}
                    />
                    {/* <Input type="text"
                      placeholder="Coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    /> */}
                    <button
                      onClick={applyCoupon}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-full font-medium transition-colors"
                    >
                      Apply coupon
                    </button>
                  </div>

                  {appliedCoupon && (
                    <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg flex justify-between items-center">
                      <span className="text-green-700 font-medium">
                        Coupon "{appliedCoupon}" applied! {discount}% off
                      </span>
                      <button
                        onClick={removeCoupon}
                        className="text-red-500 hover:text-red-700 text-sm font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Section - Cart Total */}
              <div className="w-full lg:w-90">
                <div className="bg-white border flex flex-col shadow rounded-2xl overflow-hidden">
                  <h3 className="text-xl bg-[#E5E7EB] py-3 px-4 font-bold text-gray-800 mb-6">
                    Cart Total
                  </h3>

                  <div className="space-y-4 p-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium text-black">
                        {formatPrice(subtotal)}
                      </span>
                    </div>

                    {discount > 0 && (
                      <div className="flex justify-between items-center text-green-600">
                        <span>Discount ({discount}%)</span>
                        <span className="font-medium">
                          -{formatPrice(discountAmount)}
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium text-gray-600">
                        {formatPrice(tax)}
                      </span>
                    </div>

                    <hr className="border-gray-200" />

                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-pink-500">
                        Total
                      </span>
                      <span className="text-lg font-bold text-pink-500">
                        {formatPrice(total)}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <Button className="w-full self-center bg-[#3366FF] hover:bg-blue-600 text-white py-5 rounded-2xl font-semibold text-lg transition-colors">
                      Proceed to checkout
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Footer /> */}
      </div>

      <div className="z-10 absolute">
        <FooterNew />
      </div>
    </StudentWrapper>
  );
}
