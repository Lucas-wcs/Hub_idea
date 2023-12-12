-- SQLBook: Code

DROP TABLE IF EXISTS `user`;

DROP TABLE IF EXISTS `status_idea`;

DROP TABLE IF EXISTS `Idea`;

DROP TABLE IF EXISTS `Notification`;

DROP TABLE IF EXISTS `User_notification`;

DROP TABLE IF EXISTS `Vote`;

DROP TABLE IF EXISTS `Impacted_user`;

DROP TABLE IF EXISTS `Comment`;

CREATE TABLE
    `user` (
        `id` INT PRIMARY KEY AUTO_INCREMENT,
        `firstname` VARCHAR(255) NOT NULL,
        `lastname` VARCHAR(255) NOT NULL,
        `email` TEXT NOT NULL,
        `image_profil` VARCHAR(50),
        `password` VARCHAR(50) NOT NULL,
        `is_administrator` BOOLEAN NOT NULL,
        `is_moderator` BOOLEAN NOT NULL,
        `updated_at` DATETIME
    );

CREATE TABLE
    `status_idea` (
        `id` INT PRIMARY KEY AUTO_INCREMENT,
        `status_name` VARCHAR(30) DEFAULT "draft"
    );

CREATE TABLE
    `Idea` (
        `id` INT PRIMARY KEY AUTO_INCREMENT,
        `title` VARCHAR(50) NOT NULL,
        `idea_description` VARCHAR (1000) NOT NULL,
        `idea_image` VARCHAR(50),
        `idea_date_creation` TIMESTAMP NOT NULL,
        `date_limite` DATETIME NOT NULL,
        `is_validation_administrator` BOOLEAN,
        `status_id` INT,
        `idea_final_comment` VARCHAR(500),
        `user_id` INT,
        CONSTRAINT `fk_idea_status_id` FOREIGN KEY (`status_id`) REFERENCES `Status_idea` (`id`),
        CONSTRAINT `fk_idea_user_id` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE CASCADE
    );

CREATE TABLE
    `Notification` (
        `id` INT PRIMARY KEY AUTO_INCREMENT,
        `date` DATETIME NOT NULL,
        `content` VARCHAR(500) NOT NULL
    );

CREATE TABLE
    `User_notification` (
        `user_id` INT,
        `notification_id` INT,
        PRIMARY KEY (`user_id`, `notification_id`),
        CONSTRAINT `fk_user_notification_user_id` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE CASCADE,
        CONSTRAINT `fk_user_notification_notification_id` FOREIGN KEY (`notification_id`) REFERENCES `Notification` (`id`)
    );

CREATE TABLE
    `Vote` (
        `user_id` INT,
        `idea_id` INT,
        `is_vote` BOOLEAN,
        CONSTRAINT `fk_vote_user_id` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE CASCADE,
        CONSTRAINT `fk_vote_idea_id` FOREIGN KEY (`idea_id`) REFERENCES `Idea` (`id`) ON DELETE CASCADE,
        PRIMARY KEY (`user_id`, `idea_id`)
    );

CREATE TABLE
    `Impacted_user` (
        `user_id` INT,
        `idea_id` INT,
        CONSTRAINT `fk_impacted_user_user_id` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE CASCADE,
        CONSTRAINT `fk_impacted_user_idea_id` FOREIGN KEY (`idea_id`) REFERENCES `Idea` (`id`) ON DELETE CASCADE,
        PRIMARY KEY (`user_id`, `idea_id`)
    );

CREATE TABLE
    `Comment` (
        `id` INT PRIMARY KEY AUTO_INCREMENT,
        `date_creation` DATETIME NOT NULL,
        `user_id` INT,
        `idea_id` INT,
        `description` VARCHAR(500) NOT NULL,
        CONSTRAINT `fk_comment_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
        CONSTRAINT `fk_comment_idea_id` FOREIGN KEY (`idea_id`) REFERENCES `idea` (`id`) ON DELETE CASCADE
    );