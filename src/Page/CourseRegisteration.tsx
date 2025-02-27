import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface CourseRegistrationData {
    fullName: string;
    phone: string;
    email: string;
    college: string;
    year: number;
    program: string;
    ieeMember: boolean;
    ieeId?: string;
    isReferralId: boolean;
    referralCode?: string;
    interestInStudingAboard: number;
    InterestedIn: number;
    bill: string;
}

const CourseRegistration = () => {
    const { title } = useParams<{ title: string }>();
    const [formData, setFormData] = useState<CourseRegistrationData>({
        fullName: "",
        phone: "",
        email: "",
        college: "",
        year: 1,
        program: title ?? "",
        ieeMember: false,
        ieeId: "",
        isReferralId: false,
        referralCode: "",
        interestInStudingAboard: 1,
        InterestedIn: 1,
        bill: "",
    });

    const [errors, setErrors] = useState<any>({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const validateForm = () => {
        const newErrors: any = {};
        // Validate required fields
        const requiredFields = ['fullName', 'phone', 'email', 'college'];
        requiredFields.forEach(field => {
            if (!formData[field as keyof CourseRegistrationData]) {
                newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')} is required.`;
            }
        });

        // Check for IEE ID if IEE Member is selected
        if (formData.ieeMember && !formData.ieeId) {
            newErrors.ieeId = "IEE ID is required if you are an IEE member.";
        }

        // Check for Referral Code if Referral ID is selected
        if (formData.isReferralId && !formData.referralCode) {
            newErrors.referralCode = "Referral Code is required if you have a referral ID.";
        }

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formErrors = validateForm();
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            setLoading(true);
            try {
                await axios.post("https://techlearn-server.onrender.com/courseregisteration/", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                });
                alert("Registration successful!");
                setFormData({
                    fullName: "",
                    phone: "",
                    email: "",
                    college: "",
                    year: 1,
                    program: title ?? "",
                    ieeMember: false,
                    ieeId: "",
                    isReferralId: false,
                    referralCode: "",
                    interestInStudingAboard: 1,
                    InterestedIn: 1,
                    bill: "",
                });
            } catch (error) {
                console.error("Error submitting form:", error);
                alert("There was an error submitting the form.");
            } finally {
                setLoading(false);
            }
        }
    };

    const formStyles = {
        formContainer: {
            width: '70%',
            margin: '0 auto',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            fontFamily: 'Arial, sans-serif'
        },
        title: {
            textAlign: 'center' as const,
            color: '#2c3e50',
            marginBottom: '30px',
            fontWeight: 'bold',
            fontSize: '32px',
            borderBottom: '2px solid #3498db',
            paddingBottom: '10px'
        },
        formGroup: {
            marginBottom: '20px'
        },
        label: {
            fontWeight: 'bold',
            color: '#2c3e50',
            display: 'block',
            marginBottom: '8px'
        },
        input: {
            width: '100%',
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            fontSize: '16px',
            transition: 'border-color 0.3s',
            outline: 'none'
        },
        focusInput: {
            borderColor: '#3498db',
            boxShadow: '0 0 5px rgba(52, 152, 219, 0.5)'
        },
        select: {
            width: '100%',
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            fontSize: '16px',
            backgroundColor: '#fff',
            cursor: 'pointer'
        },
        checkbox: {
            marginRight: '10px',
            transform: 'scale(1.2)',
            cursor: 'pointer'
        },
        checkboxLabel: {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            fontWeight: 'normal'
        },
        button: {
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            padding: '14px 20px',
            fontSize: '16px',
            borderRadius: '6px',
            cursor: 'pointer',
            width: '100%',
            marginTop: '20px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
        },
        buttonHover: {
            backgroundColor: '#2980b9'
        },
        error: {
            color: '#e74c3c',
            fontSize: '14px',
            marginTop: '5px'
        },
        sectionTitle: {
            borderLeft: '4px solid #3498db',
            paddingLeft: '10px',
            margin: '30px 0 20px 0',
            color: '#2c3e50',
            fontSize: '20px'
        }
    };

    return (
        <div className="container mt-5" style={{ backgroundColor: '#f9f9f9', padding: '40px 0' }}>
            <div style={formStyles.formContainer}>
                <h1 style={formStyles.title}>Internship Registration</h1>

                <div style={formStyles.sectionTitle}>Personal Information</div>

                <form onSubmit={handleSubmit}>
                    <div style={formStyles.formGroup}>
                        <label style={formStyles.label}>Full Name *</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            style={formStyles.input}
                            onFocus={(e) => e.target.style.borderColor = '#3498db'}
                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                            placeholder="Enter your full name"
                        />
                        {errors.fullName && <div style={formStyles.error}>{errors.fullName}</div>}
                    </div>

                    <div style={formStyles.formGroup}>
                        <label style={formStyles.label}>Phone *</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            style={formStyles.input}
                            onFocus={(e) => e.target.style.borderColor = '#3498db'}
                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                            placeholder="Enter your phone number"
                        />
                        {errors.phone && <div style={formStyles.error}>{errors.phone}</div>}
                    </div>

                    <div style={formStyles.formGroup}>
                        <label style={formStyles.label}>Email *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={formStyles.input}
                            onFocus={(e) => e.target.style.borderColor = '#3498db'}
                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                            placeholder="Enter your email address"
                        />
                        {errors.email && <div style={formStyles.error}>{errors.email}</div>}
                    </div>

                    <div style={formStyles.sectionTitle}>Educational Information</div>

                    <div style={formStyles.formGroup}>
                        <label style={formStyles.label}>College *</label>
                        <input
                            type="text"
                            name="college"
                            value={formData.college}
                            onChange={handleChange}
                            required
                            style={formStyles.input}
                            onFocus={(e) => e.target.style.borderColor = '#3498db'}
                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                            placeholder="Enter your college name"
                        />
                        {errors.college && <div style={formStyles.error}>{errors.college}</div>}
                    </div>

                    <div style={formStyles.formGroup}>
                        <label style={formStyles.label}>Year *</label>
                        <select
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            required
                            style={formStyles.select}
                        >
                            <option value={1}>1st Year</option>
                            <option value={2}>2nd Year</option>
                            <option value={3}>3rd Year</option>
                            <option value={4}>4th Year</option>
                        </select>
                    </div>







                    <div style={formStyles.formGroup}>
                        <div style={formStyles.checkboxLabel}>
                            <input
                                type="checkbox"
                                name="isReferralId"
                                checked={formData.isReferralId}
                                onChange={handleChange}
                                style={formStyles.checkbox}
                            />
                            <span>I have a Referral Code</span>
                        </div>
                    </div>

                    {formData.isReferralId && (
                        <div style={formStyles.formGroup}>
                            <label style={formStyles.label}>Referral Code *</label>
                            <input
                                type="text"
                                name="referralCode"
                                value={formData.referralCode || ""}
                                onChange={handleChange}
                                required
                                style={formStyles.input}
                                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                                onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                placeholder="Enter your referral code"
                            />
                            {errors.referralCode && <div style={formStyles.error}>{errors.referralCode}</div>}
                        </div>
                    )}

                    <div style={formStyles.sectionTitle}>Additional Information</div>

                    <div style={formStyles.formGroup}>
                        <label style={formStyles.label}>Interest in Studying Abroad *</label>
                        <select
                            name="interestInStudingAboard"
                            value={formData.interestInStudingAboard}
                            onChange={handleChange}
                            required
                            style={formStyles.select}
                        >
                            <option value={1}>Yes</option>
                            <option value={2}>No</option>
                            <option value={3}>Maybe</option>
                        </select>
                    </div>

                    <div style={formStyles.formGroup}>
                        <label style={formStyles.label}>Interest *</label>
                        <select
                            name="InterestedIn"
                            value={formData.InterestedIn}
                            onChange={handleChange}
                            required
                            style={formStyles.select}
                        >
                            <option value={1}>Programming</option>
                            <option value={2}>Designing</option>
                            <option value={3}>Non Coding</option>
                            <option value={4}>Hardware</option>
                            <option value={5}>None of the above</option>
                        </select>
                    </div>

                    <div style={formStyles.formGroup}>
                        <label style={formStyles.label}>Bill (Optional)</label>
                        <input
                            type="text"
                            name="bill"
                            value={formData.bill}
                            onChange={handleChange}
                            style={formStyles.input}
                            onFocus={(e) => e.target.style.borderColor = '#3498db'}
                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                            placeholder="Enter bill information (optional)"
                        />
                        {errors.bill && <div style={formStyles.error}>{errors.bill}</div>}
                    </div>

                    <button
                        type="submit"
                        style={formStyles.button}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2980b9'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3498db'}
                        disabled={loading}
                    >
                        {loading ? "Processing..." : "Submit Registration"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CourseRegistration;