# ManualFlow

### [What is manual flow](#what-is-manual-flow-1)
### [Open Manual Flow](#open-manual-flow-1)
### [Tags](#tags-1)

---

---

---

---

---

## What is manual flow

ManualFlow is a simple but practical app that lets users search and see manuals for the most popular apps like Spotify and how to install them. They can find the installation for up to 3 operative systems: Windows, Linux, and MacOS.

Manual Flow has been created with a Backend made with Django and a Frontend with React.

## Open Manual Flow

> [!IMPORTANT]
>
> You need to create a .env file in the frontend with this inside:
> ```API_URL="http://127.0.0.1:8000/api"```

#### Open the Backend

> [!IMPORTANT]
>
> You need to install Django and Python on your PC, or else it won't work.

First, open a terminal/cmd, and the line of the cmd has to end like this: ```\ManualFlow\ManualFlow_Core>```

We are going to start by creating a Django Key.

## Create a .env Key

Before initializing the app, you need to generate two things:

1. **.env File**: Create it manually or use the command `touch .env`.
2. **Django Secret Key**: Visit [this website](https://miniwebtool.com/django-secret-key-generator/) to generate a key.

After that, add this to your `.env` file:
```
SECRET_KEY='your_generated_secret_key'
```

> [!ALERT]
>
> For now, the Database is sqlite3, but you can adapt it to your desire.

> [!IMPORTANT]
>
> The instructions down here are to open the app locally.

Now you can execute these commands:

```shell
pip install -r requirements.txt
python manage.py migrate
```

To create an admin user to access, you can do this command:

```shell
python manage.py createsuperuser
```

And finally, this to access the Backend and access the localhost [127.0.0.1:8000](http://127.0.0.1:8000/)

```shell
python manage.py runserver
```

#### Open Frontend

> [!IMPORTANT]
>
> You need to install Node on your PC, or else it won't work.

First, open a terminal/cmd, and the line of the cmd has to end like this: ```\ManualFlow\ManualFlow_UI>```

Before initializing the app, you need to generate two things:

1. **.env File**: Create it manually or use the command `touch .env`.
2. Inside the .env file in the frontend, put this: ```API_URL="http://127.0.0.1:8000/api"```

Now we are going to do 2 simple commands:

To install all the dependencies for the program to work properly:

```shell
npm install
```

To open the app:

```shell
npm run dev
```

And finally, this to access the Frontend and access the localhost [127.0.0.1:5173](http://127.0.0.1:5173/)

 [!TIP]
>
> Use these scripts to easily install and open the program.

Install Script

Open Script -->

## Tags

> [!NOTE]
>
> This is just an informative point.

v1.0 --> Version 1 of ManulFlow, more versions coming in the future.

# [↑](#manualflow)