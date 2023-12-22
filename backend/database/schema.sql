-- SQLBook: Code

DROP TABLE IF EXISTS `User`;

DROP TABLE IF EXISTS `Status_idea`;

DROP TABLE IF EXISTS `Idea`;

DROP TABLE IF EXISTS `Notification`;

DROP TABLE IF EXISTS `User_notification`;

DROP TABLE IF EXISTS `Vote`;

DROP TABLE IF EXISTS `Impacted_user`;

DROP TABLE IF EXISTS `Comment`;

CREATE TABLE
    `User` (
        `id` INT PRIMARY KEY AUTO_INCREMENT,
        `firstname` VARCHAR(255) NOT NULL,
        `lastname` VARCHAR(255) NOT NULL,
        `email` TEXT NOT NULL,
        `image_profil` VARCHAR(50),
        `password` VARCHAR(50) NOT NULL DEFAULT 'welcometohubidea',
        `is_administrator` BOOLEAN NOT NULL DEFAULT 0,
        `is_moderator` BOOLEAN NOT NULL DEFAULT 0,
        `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

INSERT INTO
    User (
        firstname,
        lastname,
        email,
        image_profil,
        password,
        is_administrator,
        is_moderator,
        updated_at
    )
VALUES (
        'John',
        'Doe',
        'john@example.com',
        'john.jpg',
        'hashed_password',
        0,
        1,
        CURRENT_TIMESTAMP
    ), (
        'Alice',
        'Smith',
        'alice@example.com',
        'alice.jpg',
        'hashed_password',
        0,
        1,
        CURRENT_TIMESTAMP
    ), (
        'Robert',
        'Johnson',
        'robert@example.com',
        'robert.jpg',
        'hashed_password',
        0,
        0,
        CURRENT_TIMESTAMP
    ), (
        'Emily',
        'Brown',
        'emily@example.com',
        'emily.jpg',
        'hashed_password',
        0,
        0,
        CURRENT_TIMESTAMP
    ), (
        'Michael',
        'Wilson',
        'michael@example.com',
        'michael.jpg',
        'hashed_password',
        0,
        0,
        CURRENT_TIMESTAMP
    ), (
        'Sophia',
        'Martinez',
        'sophia@example.com',
        'sophia.jpg',
        'hashed_password',
        0,
        0,
        CURRENT_TIMESTAMP
    ), (
        'William',
        'Anderson',
        'william@example.com',
        'william.jpg',
        'hashed_password',
        0,
        0,
        CURRENT_TIMESTAMP
    ), (
        'Olivia',
        'Garcia',
        'olivia@example.com',
        'olivia.jpg',
        'hashed_password',
        0,
        0,
        CURRENT_TIMESTAMP
    ), (
        'James',
        'Lopez',
        'james@example.com',
        'james.jpg',
        'hashed_password',
        0,
        0,
        CURRENT_TIMESTAMP
    ), (
        'Emma',
        'Hernandez',
        'emma@example.com',
        'emma.jpg',
        'hashed_password',
        0,
        0,
        CURRENT_TIMESTAMP
    );

CREATE TABLE
    `Status_idea` (
        `id` INT PRIMARY KEY AUTO_INCREMENT,
        `status_name` VARCHAR(30) DEFAULT "draft"
    );

    INSERT INTO Status_idea (status_name) VALUES ("draft"), ("to_accept"), ("admin_refused"), ("on_going"), ("to_decide"), ("moderator_accepted"), ("moderator_refused");

CREATE TABLE
    `Idea` (
        `id` INT PRIMARY KEY AUTO_INCREMENT,
        `title` VARCHAR(50) NOT NULL,
        `idea_description` VARCHAR (1000) NOT NULL,
        `idea_image` VARCHAR(50),
        `idea_date_creation` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
        `date_limit` DATETIME,
        `is_validation_administrator` BOOLEAN,
        `status_id` INT DEFAULT 1,
        `idea_final_comment` VARCHAR(500),
        `user_id` INT,
        CONSTRAINT `fk_idea_status_id` FOREIGN KEY (`status_id`) REFERENCES `Status_idea` (`id`),
        CONSTRAINT `fk_idea_user_id` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE CASCADE
    );

    INSERT INTO Idea (
        title, idea_description, idea_image, date_limit, is_validation_administrator
    ) VALUES ("réaliser un repas de Noel", "Pour les fêtes de fin d'années et avant les vacances, ce serait sympa d'organiser un repas collectif", "idée image",CURRENT_TIMESTAMP, 0), ("changer les fenêtres du bureau 402", "Depuis plusieurs hivers, les fenêtres ne sont plus efficaces, il fait froid, il y a de l'humidité ; il faudrait donc remplacer ces fenêtres en urgence", "idée image",CURRENT_TIMESTAMP, 0), ("mettre une télé dans la salle de pause", "pour les pauses du midi, ce serait bien d'avoir une télé pour pouvoir jouer à la console ou regarder des films ou séries", "idée image",CURRENT_TIMESTAMP, 0);

CREATE TABLE
    `Notification` (
        `id` INT PRIMARY KEY AUTO_INCREMENT,
        `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
        `content` VARCHAR(500) NOT NULL
    );  

INSERT INTO
    Notification (content)
VALUES ('Ton idée a été soumise à l administrateur'), ('Ton idée a été acceptée par les décideurs, félicitations !'), ('Tu peux dès à présent voter pour l idée : changer les fenêtres du bureau 402');

CREATE TABLE
    `User_notification` (
        `user_id` INT,
        `notification_id` INT,
        PRIMARY KEY (`user_id`, `notification_id`),
        CONSTRAINT `fk_user_notification_user_id` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE CASCADE,
        CONSTRAINT `fk_user_notification_notification_id` FOREIGN KEY (`notification_id`) REFERENCES `Notification` (`id`)
    );

INSERT INTO
    User_notification (user_id, notification_id)
VALUES (1, 1), (4, 3), (2,2);

CREATE TABLE
    `Vote` (
        `user_id` INT,
        `idea_id` INT,
        `is_vote` BOOLEAN,
        CONSTRAINT `fk_vote_user_id` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE CASCADE,
        CONSTRAINT `fk_vote_idea_id` FOREIGN KEY (`idea_id`) REFERENCES `Idea` (`id`) ON DELETE CASCADE,
        PRIMARY KEY (`user_id`, `idea_id`)
    );

INSERT INTO Vote (user_id, idea_id, is_vote) VALUES (3, 1, 0), (4, 1, 1), (5, 1, 0);

CREATE TABLE
    `Impacted_user` (
        `user_id` INT,
        `idea_id` INT,
        CONSTRAINT `fk_impacted_user_user_id` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE CASCADE,
        CONSTRAINT `fk_impacted_user_idea_id` FOREIGN KEY (`idea_id`) REFERENCES `Idea` (`id`) ON DELETE CASCADE,
        PRIMARY KEY (`user_id`, `idea_id`)
    );

INSERT INTO Impacted_user (user_id, idea_id) VALUES (2, 1), (3, 1), (4, 2);

CREATE TABLE
    `Comment` (
        `id` INT PRIMARY KEY AUTO_INCREMENT,
        `date_creation` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
        `user_id` INT,
        `idea_id` INT,
        `description` VARCHAR(500) NOT NULL,
        CONSTRAINT `fk_comment_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
        CONSTRAINT `fk_comment_idea_id` FOREIGN KEY (`idea_id`) REFERENCES `idea` (`id`) ON DELETE CASCADE
    );

INSERT INTO
    Comment (user_id, idea_id, description)
VALUES (3, 1, "Super idée! J'adore la créativité derrière cela. "),  (2, 3, "C'est une idée intéressante, mais peut-être pourriez-vous explorer davantage?  Cela pourrait résoudre certains défis potentiels et rendre l'idée encore plus robuste"), (1, 3, "Je suis vraiment enthousiaste à propos de cette idée!");