import React, { useState } from "react";
import PixelArt from "../ui/PixelArt";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import axios from "axios";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const backendAPI = import.meta.env.VITE_BACKEND_EMAIL;
    console.log("✅ Backend API URL:", import.meta.env.VITE_BACKEND_EMAIL);
    const fullbackendapi = backendAPI.startsWith("http")
      ? backendAPI
      : "/api/" + backendAPI.replace(/^\/+/, "");

    console.log("✅ Full Backend API:", fullbackendapi);

    if (!backendAPI) {
      console.error("❌ Backend API is missing.");
      toast({
        title: "Error",
        description: "Configuration error. Please check ENV settings.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post(
        fullbackendapi,
        {
          email: formData.email.trim(),
          name: formData.name.trim(),
          body: formData.message.trim(),
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("✅ Full Response:", response);

      const responseMessage = response.data?.message?.toLowerCase() || "";

      if (responseMessage.includes("daily limit")) {
        toast({ title: "Limit Reached", description: response.data.message });
      } else if (responseMessage.includes("error")) {
        toast({
          title: "Error",
          description: "Server error. Please try again.",
        });
      } else if (responseMessage.includes("email sent successfully")) {
        toast({ title: "Success", description: response.data.message });
        setFormData({ name: "", email: "", message: "" }); // ✅ Clear form
      } else {
        toast({ title: "Warning", description: "Unexpected server response." });
      }
    } catch (error: any) {
      console.error("❌ Request failed:", error);

      let errorMessage = "Server not reachable";
      if (error.response) {
        errorMessage =
          error.response.data?.message || `Error ${error.response.status}`;
      } else if (error.request) {
        errorMessage = "No response received from the server.";
      } else {
        errorMessage = "Request failed due to a configuration error.";
      }

      toast({ title: "Error", description: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title flex items-center gap-2">
            <PixelArt type="cursor" size="sm" />
            Contact Me
          </h2>

          <div className="mt-6 glass p-8 rounded-lg">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Mail size={20} className="text-blue-400" />
                  <h3 className="text-lg font-medium">Get in Touch</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Have a project in mind or interested in working together? Fill
                  out the form and I'll get back to you as soon as possible.
                </p>
                <div className="mt-4 mb-8">
                  <Link to="/contact">
                    <Button variant="outline" className="gap-2">
                      View Contact Details
                      <Send size={16} />
                    </Button>
                  </Link>
                </div>
                <div className="hidden md:block mt-8">
                  <PixelArt type="computer" size="lg" />
                </div>
              </div>

              <div className="flex-1">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium block mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                      className="w-full px-4 py-2 bg-secondary/50 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium block mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                      className="w-full px-4 py-2 bg-secondary/50 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-medium block mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                      rows={4}
                      className="w-full px-4 py-2 bg-secondary/50 rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                      placeholder="Your message"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md flex items-center justify-center gap-2 transition-all disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
