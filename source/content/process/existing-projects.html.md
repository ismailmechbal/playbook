Here at Icalia, some of our most interesting and challenging projects have
come to us partially developed. Tackling these [brownfield projects](https://en.wikipedia.org/wiki/Brownfield_(software_development))
requires a different approach than starting a project from scratch. In accepting
a brownfield project, not only do we need to understand the client's vision, we
need to evaluate how close the current project is to fulfilling that vision.
Moreover, we need to check out the code to see how hard it will be to continue
development.

Some basic things that we like to check:

* How long the project has been in development.
* Reasons the client wanted to switch to a new team mid-project.
* Code "health" (try to gauge technical debt via proxies like test coverage,
  code style/complexity, and security. For Ruby on Rails projects, are favorite
  tools are [SimpleCov](https://github.com/colszowka/simplecov), [Rubocop](https://github.com/bbatsov/rubocop), and
  [Brakeman](https://github.com/presidentbeef/brakeman)).
* Client timeline and goals.
