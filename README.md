[![Code Climate](https://codeclimate.com/repos/571643a339e55804b500033d/badges/eb899385bebde004c834/gpa.svg)](https://codeclimate.com/repos/571643a339e55804b500033d/feed)
[![Test Coverage](https://codeclimate.com/repos/571643a339e55804b500033d/badges/eb899385bebde004c834/coverage.svg)](https://codeclimate.com/repos/571643a339e55804b500033d/coverage)
[![Issue Count](https://codeclimate.com/repos/571643a339e55804b500033d/badges/eb899385bebde004c834/issue_count.svg)](https://codeclimate.com/repos/571643a339e55804b500033d/feed)

### Getting Started
1. Clone the project.
2. Make sure you have ~~[Middleman](https://middlemanapp.com/basics/install/)~~ [Docker](docker.com) most recent version installed.
3. Open a terminal
4. Run the next commands 
```
docker-compose run --rm web bundle
docker-compose up -d
```

For any issues or updates to the app, shutdown the process and restart it again
```
docker-compose down
docker-compose up -d
```

### Making changes
1. Pick a topic that interests you. Placeholder files are organized by topic
in source/localizable/content.
2. Beware of the language. Files are set like `team.en.html.md` where en states for English. 
3. Check out a new branch.
4. Write your article, commit your changes, and push to Github.
5. Open a pull request for your new branch and invite at least one team member
to review it before merging to master.
