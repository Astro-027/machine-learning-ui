import React from 'react';

const FeedbackForm: React.FC = () => {
    return (
        <div className="feedback-form">
            <h2>Feedback</h2>
            {/* Placeholder for feedback form */}
            <form>
                <label>
                    Your Feedback:
                    <textarea />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
