import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheckCircle, faExclamationCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';

const BetaSignupModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);
    setShowError(false);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demonstration purposes - in real app, this would be a fetch to your backend
      const success = true; // Simulate successful submission
      
      if (success) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
        
        // Close modal after success
        setTimeout(() => {
          setIsOpen(false);
          setShowSuccess(false);
        }, 3000);
      } else {
        setShowError(true);
        setErrorMessage('There was an error submitting your information. Please try again later.');
      }
    } catch (error) {
      setShowError(true);
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Used by the header and other components to open the modal
  React.useEffect(() => {
    const modal = document.getElementById('beta-signup-modal');
    if (modal) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            const isHidden = modal.classList.contains('hidden');
            setIsOpen(!isHidden);
          }
        });
      });
      
      observer.observe(modal, { attributes: true });
      
      return () => observer.disconnect();
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    document.getElementById('beta-signup-modal')?.classList.add('hidden');
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div 
      id="beta-signup-modal" 
      className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center ${isOpen ? '' : 'hidden'}`}
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full mx-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
        <button 
          id="close-modal" 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          onClick={closeModal}
        >
          <FontAwesomeIcon icon={faTimes} className="text-xl" />
          <span className="sr-only">Close</span>
        </button>
        
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="mr-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg h-10 w-10 flex items-center justify-center">
              <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Join Our Beta Program</h3>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">Sign up to be among the first to test new PulseGuard features and provide valuable feedback.</p>
          
          {showSuccess && (
            <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-4 rounded-lg mb-6">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                <p>Thank you for your interest in joining our beta program! We'll be in touch shortly.</p>
              </div>
            </div>
          )}
          
          {showError && (
            <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-4 rounded-lg mb-6">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faExclamationCircle} className="mr-2" />
                <p>{errorMessage}</p>
              </div>
            </div>
          )}
          
          <form id="beta-signup-form" onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-gray-700 dark:text-gray-300">Company (Optional)</label>
              <input 
                type="text" 
                id="company" 
                name="company" 
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" 
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Why are you interested? (Optional)</label>
              <textarea 
                id="message" 
                name="message" 
                rows={3} 
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              ></textarea>
            </div>
            
            <div className="pt-2">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-lg shadow-blue-500/20 transition-all disabled:opacity-70"
              >
                {!isSubmitting ? (
                  <span>Join Beta Program</span>
                ) : (
                  <span className="flex items-center justify-center">
                    <FontAwesomeIcon icon={faSpinner} className="fa-spin mr-2" /> Submitting...
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BetaSignupModal; 