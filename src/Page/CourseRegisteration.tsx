import { useState } from "react";
import axios from "axios";

interface CourseRegistrationData {
    fullName: string;
    phone: string;
    email: string;
    college: string;
    year: number;
    program: number;
    ieeMember: boolean;
    ieeId?: string;
    isReferralId: boolean;
    referralCode?: string;
    interestInStudingAboard: number;
    InterestedIn: number;
    bill: string;
}

const CourseRegistration = () => {
    const [formData, setFormData] = useState<CourseRegistrationData>({
        fullName: "",
        phone: "",
        email: "",
        college: "",
        year: 1,
        program: 1,
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

        // Make sure all fields are filled
        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.college.trim()) newErrors.college = "College name is required";
        if (!formData.bill.trim()) newErrors.bill = "Bill information is required";

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
                await axios.post("https://techlearn-server.onrender.com/courseregisteration/", formData);
                alert("Registration successful!");
                setFormData({
                    fullName: "",
                    phone: "",
                    email: "",
                    college: "",
                    year: 1,
                    program: 1,
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

    // Dark theme colors
    const colors = {
        background: '#171717',
        card: '#242424',
        accent: '#00c6ff',
        accentDark: '#0097c3',
        text: '#ffffff',
        textSecondary: '#b8b8b8',
        border: '#383838',
        inputBg: '#2a2a2a',
        error: '#ff5252',
        success: '#4caf50'
    };

    const formStyles = {
        pageContainer: {
            backgroundColor: colors.background,
            minHeight: '100vh',
            padding: '40px 0',
            fontFamily: 'Arial, sans-serif'
        },
        formContainer: {
            width: '70%',
            maxWidth: '800px',
            margin: '0 auto',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
            backgroundColor: colors.card,
        },
        title: {
            textAlign: 'center' as const,
            color: colors.accent,
            marginBottom: '30px',
            fontWeight: 'bold',
            fontSize: '32px',
            borderBottom: `2px solid ${colors.accent}`,
            paddingBottom: '15px'
        },
        formGroup: {
            marginBottom: '22px'
        },
        label: {
            fontWeight: 'bold',
            color: colors.text,
            display: 'block',
            marginBottom: '8px',
            fontSize: '16px'
        },
        input: {
            width: '100%',
            padding: '14px',
            backgroundColor: colors.inputBg,
            color: colors.text,
            border: `1px solid ${colors.border}`,
            borderRadius: '6px',
            fontSize: '16px',
            transition: 'all 0.3s',
            outline: 'none'
        },
        focusInput: {
            borderColor: colors.accent,
            boxShadow: `0 0 8px rgba(0, 198, 255, 0.5)`
        },
        select: {
            width: '100%',
            padding: '14px',
            backgroundColor: colors.inputBg,
            color: colors.text,
            border: `1px solid ${colors.border}`,
            borderRadius: '6px',
            fontSize: '16px',
            cursor: 'pointer',
            appearance: 'none',
            backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23b8b8b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 10px center',
            backgroundSize: '20px',
            paddingRight: '40px'
        },
        checkbox: {
            marginRight: '10px',
            width: '18px',
            height: '18px',
            accentColor: colors.accent, 
            cursor: 'pointer'
        },
        checkboxLabel: {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            fontWeight: 'normal',
            color: colors.text
        },
        button: {
            backgroundColor: colors.accent,
            color: '#000',
            border: 'none',
            padding: '15px 20px',
            fontSize: '16px',
            borderRadius: '6px',
            cursor: 'pointer',
            width: '100%',
            marginTop: '30px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s',
            textTransform: 'uppercase' as const,
            letterSpacing: '1px'
        },
        buttonHover: {
            backgroundColor: colors.accentDark
        },
        error: {
            color: colors.error,
            fontSize: '14px',
            marginTop: '5px',
            fontWeight: 'bold'
        },
        sectionTitle: {
            borderLeft: `4px solid ${colors.accent}`,
            paddingLeft: '15px',
            margin: '35px 0 20px 0',
            color: colors.text,
            fontSize: '20px',
            fontWeight: 'bold'
        },
        requiredMark: {
            color: colors.error,
            marginLeft: '3px'
        }
    };

    return (
        <div style={formStyles.pageContainer}>
            <div style={formStyles.formContainer}>
                <h1 style={formStyles.title}>Internship Registration</h1>
                
                <div style={formStyles.sectionTitle}>Personal Information</div>
                
                <form onSubmit={handleSubmit}>
                    <div style={formStyles.formGroup}>
                        <label style={formStyles.label}>
                            Full Name
                            <span style={formStyles.requiredMark}>*</span>
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            style={formStyles.input}
                            onFocus={(e) => e.target.style.borderColor = colors.accent}
                            onBlur={(e) => e.target.style.borderColor = colors.border}
                            placeholder="Enter your full name"
                        />
                        {errors.fullName && <div style={formStyles.error}>{errors.fullName}</div>}
                    </div>

                    <div style={formStyles.formGroup}>
                        <label style={formStyles.label}>
                            Phone
                            <span style={formStyles.requiredMark}>*</span>
                        </label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            style={formStyles.input}
                            onFocus={(e) => e.target.style.borderColor = colors.accent}
                            onBlur={(e) => e.target.style.borderColor = colors.border}
                            placeholder="Enter your phone number"
                        />
                        {errors.phone && <div style={formStyles.error}>{errors.phone}</div>}
                    </div>

                    <div style={formStyles.formGroup}>
                        <label style={formStyles.label}>
                            Email
                            <span style={formStyles.requiredMark}>*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={formStyles.input}
                            onFocus={(e) => e.target.style.borderColor = colors.accent}
                            onBlur={(e) => e.target.style.borderColor = colors.border}
                            placeholder="Enter your email address"
                        />
                        {errors.email && <div style={formStyles.error}>{errors.email}</div>}
                    </div>

                    <div style={formStyles.sectionTitle}>Educational Information</div>

                    <div style={formStyles.formGroup}>
                        <label style={formStyles.label}>
                            College
                            <span style={formStyles.requiredMark}>*</span>
                        </label>
                        <input
                            type="text"
                            name="college"
                            value={formData.college}
                            onChange={handleChange}
                            required
                            style={formStyles.input}
                            onFocus={(e) => e.target.style.borderColor = colors.accent}
                            onBlur={(e) => e.target.style.borderColor = colors.border}
                            placeholder="Enter your college name"
                        />
                        {errors.college && <div style={formStyles.error}>{errors.college}</div>}
                    </div>

                    <div style={formStyles.formGroup}>
                        <label style={formStyles.label}>
                            Year
                            <span style={formStyles.requiredMark}>*</span>
                        </label>
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

                    <div style={formStyles.sectionTitle}>Program Information</div>

                    <div style={formStyles.formGroup}>
                        <label style={formStyles.label}>
                            Program
                            <span style={formStyles.requiredMark}>*</span>
                        </label>
                        <select
                            name="program"
                            value={formData.program}
                            onChange={handleChange}
                            required
                            style={formStyles.select}
                        >
                            <option value={1}>Data Science with AI</option>
                            <option value={2}>Design With AI</option>
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
                            <label style={formStyles.label}>
                                Referral Code
                                <span style={formStyles.requiredMark}>*</span>
                            </label>
                            <input
                                type="text"
                                name="referralCode"
                                value={formData.referralCode || ""}
                                onChange={handleChange}
                                required={formData.isReferralId}
                                style={formStyles.input}
                                onFocus={(e) => e.target.style.borderColor = colors.accent}
                                onBlur={(e) => e.target.style.borderColor = colors.border}
                                placeholder="Enter your referral code"
                            />
                            {errors.referralCode && <div style={formStyles.error}>{errors.referralCode}</div>}
                        </div>
                    )}

                    <div style={formStyles.sectionTitle}>Additional Information</div>

                    <div style={formStyles.formGroup}>
                        <label style={formStyles.label}>
                            Interest in Studying Abroad
                            <span style={formStyles.requiredMark}>*</span>
                        </label>
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
                        <label style={formStyles.label}>
                            Interest
                            <span style={formStyles.requiredMark}>*</span>
                        </label>
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
                        <label style={formStyles.label}>
                            Bill
                            <span style={formStyles.requiredMark}>*</span>
                        </label>
                        <input
                            type="text"
                            name="bill"
                            value={formData.bill}
                            onChange={handleChange}
                            required
                            style={formStyles.input}
                            onFocus={(e) => e.target.style.borderColor = colors.accent}
                            onBlur={(e) => e.target.style.borderColor = colors.border}
                            placeholder="Enter bill information"
                        />
                        {errors.bill && <div style={formStyles.error}>{errors.bill}</div>}
                    </div>

                    <button 
                        type="submit" 
                        style={formStyles.button}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.accentDark}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.accent}
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