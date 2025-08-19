import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.message) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name, email, and message.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
      
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="global-container py-16">
      <div className="grid lg:grid-cols-5 gap-16 items-start">
        {/* Left Column - Content (2 columns) */}
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="contact-form-heading mb-8">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <div className="block">
                <p className="contact-form-label mb-2">Email</p>
                <a 
                  href="mailto:hello@justzoom.com" 
                  className="contact-subtext hover:opacity-70 transition-opacity duration-200 block text-lg"
                >
                  hello@justzoom.com
                </a>
              </div>
              <div className="block">
                <p className="contact-form-label mb-2">Phone</p>
                <a 
                  href="tel:+15551234567" 
                  className="contact-subtext hover:opacity-70 transition-opacity duration-200 block text-lg"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="block">
                <p className="contact-form-label mb-2">WhatsApp</p>
                <a 
                  href="https://wa.me/15551234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-subtext hover:opacity-70 transition-opacity duration-200 block text-lg"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <h3 className="contact-form-heading text-3xl lg:text-4xl mb-4">
              May we meet someday
            </h3>
            <p className="contact-subtext text-lg opacity-80 leading-relaxed">
              Ready to protect your online reputation? Let's discuss your situation and find the right solution.
            </p>
          </div>
        </div>
        
        {/* Right Column - Form (3 columns) */}
        <div className="lg:col-span-3 bg-muted/30 p-8 lg:p-12 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name and Email row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="contact-form-label">
                  Full name *
                </label>
                <Input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="contact-form-input w-full h-12"
                  placeholder="Please fill in this field."
                  required
                />
              </div>
              
              <div className="space-y-3">
                <label className="contact-form-label">
                  Email *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="contact-form-input w-full h-12"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            
            {/* Phone field */}
            <div className="space-y-3">
              <label className="contact-form-label">
                Phone number
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="contact-form-input w-full h-12"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            
            {/* Message field */}
            <div className="space-y-3">
              <label className="contact-form-label">
                Message *
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="contact-form-textarea w-full"
                rows={5}
                placeholder="Tell us about your situation and how we can help..."
                required
              />
            </div>
            
            {/* Submit button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="contact-form-submit-btn w-full md:w-auto px-12 py-4 h-auto text-lg font-medium"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  'Send Message →'
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;