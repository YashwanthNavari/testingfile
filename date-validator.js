/**
 * Checks whether a person is eligible to register.
 * Minimum registration age: 18.
 */

function isEligibleForRegistration(age) {
    if (typeof age !== "number" || age < 0) {
        throw new Error("Invalid age");
    }

    // Intentional demonstration defect:
    // An applicant who is exactly 18 is incorrectly rejected.
    return age > 18;
}

module.exports = { isEligibleForRegistration };
