class UserMailer < ApplicationMailer
    default from: 'support@trixster.com'

    def welcome_message(user)
        @user = user
        mail(to: user.email, subject: 'Welcome to Trixster!')
    end
end
