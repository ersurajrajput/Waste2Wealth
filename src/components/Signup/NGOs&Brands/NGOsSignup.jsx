import React, { useState } from 'react';

const NGOsSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    orgName: '',
    contactName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: '',
    pincode: '',
    city: '',
    state: '',
    docFile: null,
    referralCode: '',
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const newValue =
      type === 'checkbox' ? checked : type === 'file' ? files[0] : value;

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!formData.acceptedTerms) {
      alert('You must accept the Terms & Privacy Policy.');
      return;
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-2">NGO / Brand Partner Signup</h2>

        <div>
          <label className="block mb-1">Organization Name *</label>
          <input
            type="text"
            name="orgName"
            required
            placeholder="Enter your NGO or brand name"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1">Contact Person *</label>
          <input
            type="text"
            name="contactName"
            required
            placeholder="Contact person’s name"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter email"
              className="w-full border px-3 py-2 rounded"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Enter phone number"
              className="w-full border px-3 py-2 rounded"
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block mb-1">Password *</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            required
            placeholder="Create password"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1">Confirm Password *</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            required
            placeholder="Confirm password"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />
          <button
            type="button"
            className="text-blue-600 text-sm mt-1"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide Password' : 'Show Password'}
          </button>
        </div>

        <div>
          <label className="block mb-1">NGO Type / Category *</label>
          <select
            name="ngoType"
            required
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            <option value="education">Education</option>
            <option value="environment">Environment</option>
            <option value="healthcare">Healthcare</option>
            <option value="sanitation">Sanitation</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Office Address *</label>
          <textarea
            name="address"
            required
            placeholder="NGO / Company office address"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Pincode *</label>
            <input
              type="number"
              name="pincode"
              required
              className="w-full border px-3 py-2 rounded"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1">City / District</label>
            <input
              type="text"
              name="city"
              placeholder="Auto-detect or enter manually"
              className="w-full border px-3 py-2 rounded"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1">State</label>
            <select
              name="state"
              className="w-full border px-3 py-2 rounded"
              onChange={handleChange}
            >
              <option value="">Select state</option>
              <option value="UP">Uttar Pradesh</option>
              <option value="MH">Maharashtra</option>
              <option value="KA">Karnataka</option>
              <option value="RJ">Rajasthan</option>
              <option value="DL">Delhi</option>
              {/* Add more states as needed */}
            </select>
          </div>

          <div>
            <label className="block mb-1">Registration Document (optional)</label>
            <input
              type="file"
              name="docFile"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full border px-3 py-2 rounded"
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block mb-1">Referral Code (optional)</label>
          <input
            type="text"
            name="referralCode"
            placeholder="Enter referral code if any"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="acceptedTerms"
            required
            onChange={handleChange}
          />
          <label>
            I accept the{' '}
            <a href="#" className="underline text-blue-600">
              Terms & Privacy Policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Register NGO / Brand
        </button>
      </form>
    </div>
  );
};

export default NGOsSignup;
