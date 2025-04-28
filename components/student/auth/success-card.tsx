import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

// Success Card Component
export default function SuccessCard({ successUrl }: { successUrl: string }) {
    // Handle OK button in success state
  const handleOkClick = () => {
    // Reset the form or redirect to login
    window.location.href = successUrl;
  };
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-2">
            <Check className="h-8 w-8 text-white" />
          </div>
  
          <h2 className="text-2xl font-bold">Thank You!</h2>
  
          <p className="text-gray-600">
            Your details have been successfully submitted. Thanks!
          </p>
  
          <Button
            onClick={handleOkClick}
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
          >
            OK
          </Button>
        </CardContent>
      </Card>
    );
  }