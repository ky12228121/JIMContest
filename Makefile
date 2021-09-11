push:
	amplify push -y

update-schema:
	amplify api gql-compile

pub:
	aplify publish

status:
	make status