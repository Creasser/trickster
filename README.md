# TriXster

**TriXster** is an application that allows snowboarders to easily manage current tricks that they are working on. This application uses a React frontend and a Rails backend.

# Database Structure
- Includes a many to many database relationship
- Includes 4 models
    - User, Tricks, Goals, and Category
- Managed using PostgreSQL
- Validations implemented with ActiveRecord   

# User Experience
**Users are able to:**
- create an account and login
- add currently existing tricks to their own goals
- increase the current number of attempts on a trick
- update the status of a trick to completed
- add tricks that are not currently added to the application
- remove tricks that they made in error
- manage their stats

# Versions
### Backend
- Ruby 3.2.2
- Rails 7.0.7
- Bcrypt 3.1.7
### Database
- PostgreSQL 1.1
### Frontend
- React 18.2
- React Router Dom 5.3.4
- MaterialUI 5.14.13
