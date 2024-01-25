-- SQLBook: Code

DROP TABLE IF EXISTS `User`;

DROP TABLE IF EXISTS `Status_idea`;

DROP TABLE IF EXISTS `Idea`;

DROP TABLE IF EXISTS `Vote`;

DROP TABLE IF EXISTS `Impacted_user`;

DROP TABLE IF EXISTS `Comment`;

CREATE TABLE `User` (
    `id` INT PRIMARY KEY AUTO_INCREMENT, `firstname` VARCHAR(255) NOT NULL, `lastname` VARCHAR(255) NOT NULL, `email` TEXT NOT NULL, `image_profil` VARCHAR(150), `password` VARCHAR(150) NOT NULL, `is_administrator` BOOLEAN NOT NULL DEFAULT 0, `is_moderator` BOOLEAN NOT NULL DEFAULT 0, `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO
    User (
        firstname, lastname, email, image_profil, password, is_administrator, is_moderator, updated_at
    )
VALUES (
        'Étienne', 'Lefebvre', 'etienne@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 1, 0, CURRENT_TIMESTAMP
    ),
    (
        'Charlotte', 'Dubois', 'charlotte@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 1, CURRENT_TIMESTAMP
    ),
    (
        'Antoine', 'Girard', 'antoine@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 1, CURRENT_TIMESTAMP
    ),
    (
        'Manon', 'Martel', 'manon@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 1, CURRENT_TIMESTAMP
    ),
    (
        'Luc', 'Berger', 'luc@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 1, CURRENT_TIMESTAMP
    ),
    (
        'Léa', 'Lavoie', 'lea@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 1, CURRENT_TIMESTAMP
    ),
    (
        'Gabriel', 'Boucher', 'gabriel@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 0, CURRENT_TIMESTAMP
    ),
    (
        'Clara', 'Moreau', 'clara@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 0, CURRENT_TIMESTAMP
    ),
    (
        'Mathis', 'Caron', 'mathis@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 0, CURRENT_TIMESTAMP
    ),
    (
        'Emma', 'Gagnon', 'emma@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 0, CURRENT_TIMESTAMP
    ),
    (
        'Nathan', 'Leblanc', 'nathan@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 0, CURRENT_TIMESTAMP
    ),
    (
        'Chloé', 'Lemieux', 'chloe@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 0, CURRENT_TIMESTAMP
    ),
    (
        'Adam', 'Perrault', 'adam@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 0, CURRENT_TIMESTAMP
    ),
    (
        'Lola', 'Rousseau', 'lola@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 0, CURRENT_TIMESTAMP
    ),
    (
        'Noah', 'Mercier', 'noah@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 0, CURRENT_TIMESTAMP
    ),
    (
        'Rose', 'Gauthier', 'rose@example.com', null, '$argon2id$v=19$m=19456,t=2,p=1$j2uSPObl/PilgZ3DgOD9Ow$QAhtI7YmZbxAmtO1Gz9kkXGfs5wY6kCwW9wrAy1hia0', 0, 0, CURRENT_TIMESTAMP
    );

CREATE TABLE `Status_idea` (
    `id` INT PRIMARY KEY AUTO_INCREMENT, `status_name` VARCHAR(30) DEFAULT "draft"
);

INSERT INTO
    Status_idea (status_name)
VALUES ("Brouillon"),
    (
        "En attente de l'administrateur"
    ),
    (
        "Refusée par l'administrateur"
    ),
    ("En cours de vote"),
    (
        "En attente décision modérateur"
    ),
    ("Idée validée"),
    ("Idée refusée");

CREATE TABLE `Idea` (
    `id` INT PRIMARY KEY AUTO_INCREMENT, `title` VARCHAR(50) NOT NULL, `idea_description` VARCHAR(1000) NOT NULL, `idea_image` VARCHAR(150) DEFAULT "https://picsum.photos/300/600", `idea_date_creation` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, `date_limit` DATETIME, `is_validation_administrator` BOOLEAN, `status_id` INT DEFAULT 1, `idea_final_comment` VARCHAR(500), `user_id` INT, CONSTRAINT `fk_idea_status_id` FOREIGN KEY (`status_id`) REFERENCES `Status_idea` (`id`), CONSTRAINT `fk_idea_user_id` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE CASCADE
);

INSERT INTO
    Idea (
        title, idea_description, idea_image, date_limit, is_validation_administrator, status_id, user_id
    )
VALUES (
        "réaliser un repas de Noel", "Pour les fêtes de fin d'années et avant les vacances, ce serait sympa d'organiser un repas collectif", "/images/repas_noel.jpg", CURRENT_TIMESTAMP, 0, 1, 4
    ),
    (
        "changer les fenêtres du bureau 402", "Depuis plusieurs hivers, les fenêtres ne sont plus efficaces, il fait froid, il y a de l'humidité ; il faudrait donc remplacer ces fenêtres en urgence", "/images/bureau_402.jpg", CURRENT_TIMESTAMP, 0, 2, 3
    ),
    (
        "mettre une télé dans la salle de pause", "pour les pauses du midi, ce serait bien d'avoir une télé pour pouvoir jouer à la console ou regarder des films ou séries", "/images/pause.jpg", CURRENT_TIMESTAMP, 0, 3, 1
    ),
    (
        "Organiser une journée d'intégration", "Proposer une journée d'activités pour favoriser l'intégration des nouveaux employés dans l'entreprise.", "/images/integration.jpg", CURRENT_TIMESTAMP, 0, 4, 6
    ),
    (
        "Programme de mentorat interne", "Créer un programme de mentorat pour aider les employés juniors à développer leurs compétences avec l'aide des seniors.", "/images/mentor.jpg", CURRENT_TIMESTAMP, 0, 5, 7
    ),
    (
        "Amélioration des espaces de travail", "Réaménager les espaces de travail pour favoriser la collaboration et le bien-être des employés.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 6, 8
    ),
    (
        "Initier des formations inter-équipes", "Organiser des sessions de formation où différentes équipes peuvent partager leurs connaissances et compétences.", "/images/formation.jpg", CURRENT_TIMESTAMP, 0, 7, 2
    ),
    (
        "Campagne de sensibilisation écologique", "Promouvoir des actions en faveur de l'environnement et sensibiliser les employés à adopter des pratiques durables.", "/images/ecologie.jpg", CURRENT_TIMESTAMP, 0, 1, 3
    ),
    (
        "Mise en place d'un système de récompenses", "Créer un système de récompenses pour reconnaître les employés méritants et encourager la productivité.", "/images/recompense.jpg", CURRENT_TIMESTAMP, 0, 2, 9
    ),
    (
        "Evénements sociaux réguliers", "Organiser des événements sociaux périodiques pour renforcer la cohésion d'équipe et le moral des employés.", "/images/evenement.jpg", CURRENT_TIMESTAMP, 0, 3, 2
    ),
    (
        "Développement d'une application interne", "Concevoir une application interne pour simplifier les processus de communication et de collaboration.", "/images/saas.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Création d'un programme de bien-être", "Lancer un programme de bien-être pour soutenir la santé mentale et physique des employés.", "/images/zen.jpg", CURRENT_TIMESTAMP, 0, 5, 9
    ),
    (
        "Installation d'équipements sportifs", "Installer des équipements sportifs pour encourager l'activité physique et la détente au sein de l'entreprise.", "/images/sport.jpg", CURRENT_TIMESTAMP, 0, 6, 8
    );

CREATE TABLE `Vote` (
    `user_id` INT, `idea_id` INT, `is_vote` BOOLEAN, CONSTRAINT `fk_vote_user_id` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE CASCADE, CONSTRAINT `fk_vote_idea_id` FOREIGN KEY (`idea_id`) REFERENCES `Idea` (`id`) ON DELETE CASCADE, PRIMARY KEY (`user_id`, `idea_id`)
);

INSERT INTO
    Vote (user_id, idea_id, is_vote)
VALUES (3, 1, 0),
    (4, 1, 1),
    (5, 1, 0);

CREATE TABLE `Impacted_user` (
    `user_id` INT, `idea_id` INT, CONSTRAINT `fk_impacted_user_user_id` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE CASCADE, CONSTRAINT `fk_impacted_user_idea_id` FOREIGN KEY (`idea_id`) REFERENCES `Idea` (`id`) ON DELETE CASCADE, PRIMARY KEY (`user_id`, `idea_id`)
);

INSERT INTO
    Impacted_user (user_id, idea_id)
VALUES (2, 1),
    (3, 1),
    (4, 2);

CREATE TABLE `Comment` (
    `id` INT PRIMARY KEY AUTO_INCREMENT, `date_creation` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, `user_id` INT, `idea_id` INT, `description` VARCHAR(500) NOT NULL, CONSTRAINT `fk_comment_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE, CONSTRAINT `fk_comment_idea_id` FOREIGN KEY (`idea_id`) REFERENCES `idea` (`id`) ON DELETE CASCADE
);

INSERT INTO
    Comment (user_id, idea_id, description)
VALUES (
        3, 1, "Super idée! J'adore la créativité derrière cela. "
    ),
    (
        2, 3, "C'est une idée intéressante, mais peut-être pourriez-vous explorer davantage?  Cela pourrait résoudre certains défis potentiels et rendre l'idée encore plus robuste"
    ),
    (
        1, 3, "Je suis vraiment enthousiaste à propos de cette idée!"
    );