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
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
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
      setFile(null);
      
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
    <div className="global-container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column - Content */}
        <div className="space-y-8">
          <div>
            <h2 className="contact-form-heading mb-8">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <div className="block">
                <a 
                  href="mailto:hello@justzoom.com" 
                  className="contact-subtext hover:opacity-70 transition-opacity duration-200 block"
                >
                  <strong>Email:</strong> hello@justzoom.com
                </a>
              </div>
              <div className="block">
                <a 
                  href="tel:+15551234567" 
                  className="contact-subtext hover:opacity-70 transition-opacity duration-200 block"
                >
                  <strong>Phone:</strong> +1 (555) 123-4567
                </a>
              </div>
              <div className="block">
                <a 
                  href="https://wa.me/15551234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-subtext hover:opacity-70 transition-opacity duration-200 block"
                >
                  <strong>WhatsApp:</strong> +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8">
            <h3 className="contact-form-heading mb-6">
              May we meet someday
            </h3>
          </div>
        </div>
        
        {/* Right Column - Form */}
        <div className="w-full">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full name field */}
            <div className="space-y-3">
              <label className="contact-form-label">
                Full name
              </label>
              <Input
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="contact-form-input w-full"
                placeholder="Please fill in this field."
                required
              />
            </div>
            
            {/* Email field */}
            <div className="space-y-3">
              <label className="contact-form-label">
                Email
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="contact-form-input w-full"
                required
              />
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
                className="contact-form-input w-full"
              />
            </div>
            
            {/* Message field */}
            <div className="space-y-3">
              <label className="contact-form-label">
                Message
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="contact-form-textarea w-full"
                rows={6}
                required
              />
            </div>
            
            {/* Bottom row - Upload and Submit */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <input
                  type="file"
                  id="file-upload"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
                <label
                  htmlFor="file-upload"
                  className="contact-form-upload-btn cursor-pointer"
                >
                  Upload file →
                </label>
                {file && (
                  <span className="text-sm text-muted-foreground ml-2">
                    {file.name}
                  </span>
                )}
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="contact-form-submit-btn w-full sm:w-auto"
              >
                {isSubmitting ? 'Sending...' : 'Submit →'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;