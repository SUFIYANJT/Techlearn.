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

    return (
        <div className="container mt-5" >
            <h1 className="text-center">Course Registration</h1>
            <form onSubmit={handleSubmit} style={{ width: '60%', margin: '0 auto' }}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                    {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                        type="text"
                        className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">College</label>
                    <input
                        type="text"
                        className={`form-control ${errors.college ? "is-invalid" : ""}`}
                        name="college"
                        value={formData.college}
                        onChange={handleChange}
                        required
                    />
                    {errors.college && <div className="invalid-feedback">{errors.college}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Year</label>
                    <select
                        className="form-control"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        required
                    >
                        <option value={1}>1st Year</option>
                        <option value={2}>2nd Year</option>
                        <option value={3}>3rd Year</option>
                        <option value={4}>4th Year</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Program</label>
                    <select
                        className="form-control"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                    >
                        <option value={1}>Course 1</option>
                        <option value={2}>Course 2</option>
                        <option value={3}>Course 3</option>
                    </select>
                </div>

                <div className="mb-3">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="ieeMember"
                            checked={formData.ieeMember}
                            onChange={handleChange}
                        />
                        <label className="form-check-label">IEE Member</label>
                    </div>
                </div>

                {formData.ieeMember && (
                    <div className="mb-3">
                        <label className="form-label">IEE ID</label>
                        <input
                            type="text"
                            className={`form-control ${errors.ieeId ? "is-invalid" : ""}`}
                            name="ieeId"
                            value={formData.ieeId || ""}
                            onChange={handleChange}
                        />
                        {errors.ieeId && <div className="invalid-feedback">{errors.ieeId}</div>}
                    </div>
                )}

                <div className="mb-3">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="isReferralId"
                            checked={formData.isReferralId}
                            onChange={handleChange}
                        />
                        <label className="form-check-label">Has Referral ID</label>
                    </div>
                </div>

                {formData.isReferralId && (
                    <div className="mb-3">
                        <label className="form-label">Referral Code</label>
                        <input
                            type="text"
                            className={`form-control ${errors.referralCode ? "is-invalid" : ""}`}
                            name="referralCode"
                            value={formData.referralCode || ""}
                            onChange={handleChange}
                        />
                        {errors.referralCode && <div className="invalid-feedback">{errors.referralCode}</div>}
                    </div>
                )}

                <div className="mb-3">
                    <label className="form-label">Interest in Studying Abroad</label>
                    <select
                        className="form-control"
                        name="interestInStudingAboard"
                        value={formData.interestInStudingAboard}
                        onChange={handleChange}
                        required
                    >
                        <option value={1}>Yes</option>
                        <option value={2}>No</option>
                        <option value={3}>Maybe</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Interest</label>
                    <select
                        className="form-control"
                        name="InterestedIn"
                        value={formData.InterestedIn}
                        onChange={handleChange}
                        required
                    >
                        <option value={1}>Programming</option>
                        <option value={2}>Designing</option>
                        <option value={3}>Non Coding</option>
                        <option value={4}>Hardware</option>
                        <option value={5}>None of the above</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Bill</label>
                    <input
                        type="text"
                        className={`form-control ${errors.bill ? "is-invalid" : ""}`}
                        name="bill"
                        value={formData.bill}
                        onChange={handleChange}
                        required
                    />
                    {errors.bill && <div className="invalid-feedback">{errors.bill}</div>}
                </div>

                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default CourseRegistration;
