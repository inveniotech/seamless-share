﻿using FluentValidation;
using SeamlessShareApi.Models.Request;

namespace SeamlessShareApi.Validators;

public class RegisterReqValidator : AbstractValidator<RegisterReq>
{
    public RegisterReqValidator()
    {
        RuleFor(x => x.FirstName)
            .MaximumLength(100)
            .WithMessage("First name cannot exceed 100 characters.")
            .Matches(@"^[a-zA-Z\s-]*$")
            .WithMessage("First name can only contain letters and spaces.")
            .When(x => !string.IsNullOrEmpty(x.FirstName));

        RuleFor(x => x.LastName)
            .MaximumLength(100)
            .WithMessage("Last name cannot exceed 100 characters.")
            .Matches(@"^[a-zA-Z\s-]*$")
            .WithMessage("Last name can only contain letters and spaces.")
            .When(x => !string.IsNullOrEmpty(x.LastName));


        RuleFor(x => x.EmailAddress)
            .NotEmpty()
            .WithMessage("Please enter your email address.")
            .EmailAddress()
            .WithMessage("Please enter a valid email address.")
            .MaximumLength(255)
            .WithMessage("Email address cannot exceed 255 characters.");

        RuleFor(x => x.Password)
            .NotEmpty()
            .WithMessage("Please enter your password.")
            .MinimumLength(8)
            .WithMessage("Password must be at least 8 characters long.")
            .Matches(@"^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$")
            .WithMessage(
                "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
    }
}
