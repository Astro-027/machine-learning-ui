import React from 'react';

const FeedbackForm: React.FC = () => {
    return (
        <div className="feedback-form">
            <h3>Feedback</h3>
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
