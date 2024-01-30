-- SQLBook: Code

DROP TABLE IF EXISTS `user`;

DROP TABLE IF EXISTS `status_idea`;

DROP TABLE IF EXISTS `idea`;

DROP TABLE IF EXISTS `vote`;

DROP TABLE IF EXISTS `impacted_user`;

DROP TABLE IF EXISTS `comment`;

CREATE TABLE `user` (
    `id` INT PRIMARY KEY AUTO_INCREMENT, `firstname` VARCHAR(255) NOT NULL, `lastname` VARCHAR(255) NOT NULL, `email` TEXT NOT NULL, `image_profil` VARCHAR(150), `password` VARCHAR(150) NOT NULL, `is_administrator` BOOLEAN NOT NULL DEFAULT 0, `is_moderator` BOOLEAN NOT NULL DEFAULT 0, `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO
    user (
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

CREATE TABLE `status_idea` (
    `id` INT PRIMARY KEY AUTO_INCREMENT, `status_name` VARCHAR(30) DEFAULT "draft"
);

INSERT INTO
    status_idea (status_name)
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

CREATE TABLE `idea` (
    `id` INT PRIMARY KEY AUTO_INCREMENT, `title` VARCHAR(100) NOT NULL, `idea_description` VARCHAR(1000) NOT NULL, `idea_image` VARCHAR(150) DEFAULT "https://picsum.photos/300/600", `idea_date_creation` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, `date_limit` DATETIME, `is_validation_administrator` BOOLEAN, `status_id` INT DEFAULT 1, `idea_final_comment` VARCHAR(500), `user_id` INT, CONSTRAINT `fk_idea_status_id` FOREIGN KEY (`status_id`) REFERENCES `status_idea` (`id`), CONSTRAINT `fk_idea_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
);

INSERT INTO
    idea (
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
        "Amélioration des espaces de travail", "Réaménager les espaces de travail pour favoriser la collaboration et le bien-être des employés.", "/images/espace_travail.jpg", CURRENT_TIMESTAMP, 0, 2, 4
    ),
    (
        "Initier des formations inter-équipes", "Organiser des sessions de formation où différentes équipes peuvent partager leurs connaissances et compétences.", "/images/equipe-compressed.jpg", CURRENT_TIMESTAMP, 0, 3, 5
    ),
    (
        "Campagne de sensibilisation écologique", "Promouvoir des actions en faveur de l'environnement et sensibiliser les employés à adopter des pratiques durables.", "/images/ecology-compressed.jpg", CURRENT_TIMESTAMP, 0, 4, 6
    ),
    (
        "Mise en place d'un système de récompenses", "Créer un système de récompenses pour reconnaître les employés méritants et encourager la productivité.", "/images/reward-compressed.jpg", CURRENT_TIMESTAMP, 0, 5, 7
    ),
    (
        "Evénements sociaux réguliers", "Organiser des événements sociaux périodiques pour renforcer la cohésion d'équipe et le moral des employés.", "/images/event-compressed.jpg", CURRENT_TIMESTAMP, 0, 6, 8
    ),
    (
        "Développement d'une application interne", "Concevoir une application interne pour simplifier les processus de communication et de collaboration.", "/images/communication-compressed.jpg", CURRENT_TIMESTAMP, 0, 2, 9
    ),
    (
        "Création d'un programme de bien-être", "Lancer un programme de bien-être pour soutenir la santé mentale et physique des employés.", "/images/yoga-compressed.jpg", CURRENT_TIMESTAMP, 0, 3, 10
    ),
    (
        "Installation d'équipements sportifs", "Installer des équipements sportifs pour encourager l'activité physique et la détente au sein de l'entreprise.", "/images/équipement-sportif.jpg", CURRENT_TIMESTAMP, 0, 4, 11
    ),
    (
        "Événement d'Intégration", "Organiser un événement d'intégration pour les nouveaux employés. Les idées peuvent inclure des activités de team-building, des rencontres informelles, etc.", "/images/integration.jpg", CURRENT_TIMESTAMP, 0, 5, 12
    ),
    (
        "Amélioration des Espaces de Travail", "Proposer des suggestions pour améliorer l'ergonomie et la convivialité des espaces de travail. Cela peut inclure des idées pour la décoration, l'agencement des bureaux, etc.", "/images/travaux.jpg", CURRENT_TIMESTAMP, 0, 6, 13
    ),
    (
        "Projet de Responsabilité Sociale des Entreprises (RSE)", "Proposer des projets RSE qui permettront à l'entreprise de contribuer positivement à la communauté ou à l'environnement.", "/images/rse.jpg", CURRENT_TIMESTAMP, 0, 2, 14
    ),
    (
        "Programme de Mentorat", "Mettre en place un programme de mentorat pour favoriser le développement professionnel et personnel des employés.", "/images/mentorat.jpg", CURRENT_TIMESTAMP, 0, 3, 15
    ),
    (
        "Journée sans Réunion", "Proposer une journée par mois sans réunions pour permettre aux employés de se concentrer sur des tâches individuelles sans interruption.", "/images/reunion.jpg", CURRENT_TIMESTAMP, 0, 4, 1
    ),
    (
        "Boîte à Idées Virtuelle", "Créer une boîte à idées virtuelle où les employés peuvent soumettre anonymement des suggestions d'amélioration ou d'innovation.", "/images/boite-a-idee.jpg", CURRENT_TIMESTAMP, 0, 5, 2
    ),
    (
        "Programme de Flexibilité d'Horaire", "Proposer un programme de flexibilité d'horaire pour permettre aux employés de gérer leur temps de travail de manière plus adaptée à leurs besoins personnels.", "/images/horaire.jpg", CURRENT_TIMESTAMP, 0, 6, 3
    ),
    (
        "Initiative de Développement Durable", "Mettre en place des initiatives visant à rendre l'entreprise plus respectueuse de l'environnement et à promouvoir le développement durable.", "/images/développement-durable.jpg", CURRENT_TIMESTAMP, 0, 7, 4
    ),
    (
        "Concours d'Innovation", "Organiser un concours d'innovation pour stimuler la créativité des employés et encourager la proposition de nouvelles idées pour l'entreprise.", "/images/innovation.jpg", CURRENT_TIMESTAMP, 0, 1, 8
    ),
    (
        "Projet de Volontariat d'Entreprise", "Encourager les employés à s'impliquer dans des projets de volontariat pour renforcer l'engagement social de l'entreprise.", "/images/volontariat.jpg", CURRENT_TIMESTAMP, 0, 2, 7
    ),
    (
        "Amélioration des Processus Internes", "Proposer des idées pour optimiser les processus internes de l'entreprise afin d'augmenter l'efficacité opérationnelle.", "/images/processus-internes.jpg", CURRENT_TIMESTAMP, 0, 4, 6
    ),
    (
        "Récompenses pour l'Innovation", "Créer un programme de récompenses pour encourager et reconnaître les employés qui proposent des idées innovantes bénéfiques à l'entreprise.", "/images/innovation.jpg", CURRENT_TIMESTAMP, 0, 3, 11
    ),
    (
        "Programme de Développement Professionnel", "Proposer un programme visant à développer les compétences professionnelles des employés par le biais de formations spécialisées et de certifications.", "/images/développement-professionnel.jpg", CURRENT_TIMESTAMP, 0, 5, 14
    ),
    (
        "Semaine de la Diversité et de l'Inclusion", "Organiser une semaine dédiée à promouvoir la diversité et l'inclusion au sein de l'entreprise avec des événements, des ateliers, et des discussions.", "/images/inclusion.jpg", CURRENT_TIMESTAMP, 0, 6, 13
    ),
    (
        "Campagne de Sensibilisation à la Cybersécurité", "Lancer une campagne de sensibilisation pour informer les employés sur les meilleures pratiques en matière de cybersécurité et renforcer la sécurité des données.", "/images/cybersecurite.jpg", CURRENT_TIMESTAMP, 0, 7, 12
    ),
    (
        "Bibliothèque de Ressources Numériques", "Créer une bibliothèque numérique interne avec des ressources utiles, telles que des livres électroniques, des articles, et des vidéos, pour favoriser l'apprentissage continu.", "/images/bibliotheque.jpg", CURRENT_TIMESTAMP, 0, 1, 15
    ),
    (
        "Aménagement d'Espaces Collaboratifs", "Recueillir des suggestions pour aménager des espaces collaboratifs favorisant l'échange d'idées et la créativité au sein de l'entreprise.", "/images/espace-collaboratif.jpg", CURRENT_TIMESTAMP, 0, 2, 16
    ),
    (
        "Programme de Parrainage pour Nouveaux Employés", "Mettre en place un programme de parrainage où les employés expérimentés accompagnent les nouveaux arrivants pour faciliter leur intégration.", "/images/parrainage.jpg", CURRENT_TIMESTAMP, 0, 3, 14
    ),
    (
        "Hackathon Interne", "Organiser un hackathon interne pour stimuler l'innovation et encourager les employés à collaborer sur des projets créatifs.", "/images/hackathon.jpg", CURRENT_TIMESTAMP, 0, 4, 4
    ),
    (
        "Système de Récompenses pour la Productivité", "Proposer un système de récompenses basé sur la productivité pour encourager et reconnaître les performances exceptionnelles des employés.", "/images/recompense.jpg", CURRENT_TIMESTAMP, 0, 5, 4
    ),
    (
        "Programme de Volontariat d'Entreprise Virtuel", "Permettre aux employés de s'engager dans des activités de volontariat virtuelles pour soutenir des organisations caritatives et communautaires en ligne.", "/images/volontariat-d'entreprise.jpg", CURRENT_TIMESTAMP, 0, 6, 4
    ),
    (
        "Club de Lecture d'Entreprise", "Créer un club de lecture où les employés peuvent partager et discuter de leurs lectures, favorisant ainsi la culture et l'échange d'idées.", "/images/lecture.jpg", CURRENT_TIMESTAMP, 0, 7, 4
    );

CREATE TABLE `vote` (
    `user_id` INT, `idea_id` INT, `is_vote` BOOLEAN, CONSTRAINT `fk_vote_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE, CONSTRAINT `fk_vote_idea_id` FOREIGN KEY (`idea_id`) REFERENCES `idea` (`id`) ON DELETE CASCADE, PRIMARY KEY (`user_id`, `idea_id`)
);

INSERT INTO
    vote (user_id, idea_id, is_vote)
VALUES (5, 1, 0),
    (6, 1, 1),
    (7, 1, 0),
    (8, 1, 1),
    (9, 1, 0),
    (10, 2, 1),
    (11, 2, 0),
    (12, 2, 1),
    (13, 2, 0),
    (14, 2, 1),
    (15, 3, 0),
    (16, 3, 1),
    (5, 3, 0),
    (6, 3, 1),
    (7, 3, 0),
    (8, 3, 1),
    (9, 3, 0),
    (10, 4, 1),
    (11, 4, 0),
    (12, 4, 1),
    (13, 4, 0),
    (14, 4, 1),
    (15, 5, 0),
    (16, 5, 1),
    (5, 5, 0),
    (6, 5, 1),
    (7, 5, 0),
    (8, 5, 1),
    (9, 5, 0),
    (10, 6, 1),
    (11, 6, 0),
    (12, 6, 1),
    (13, 6, 0),
    (14, 6, 1),
    (15, 7, 0),
    (16, 7, 1),
    (5, 7, 0),
    (6, 7, 1),
    (7, 7, 0),
    (8, 7, 1),
    (9, 7, 0),
    (10, 8, 1),
    (11, 8, 0),
    (12, 8, 1),
    (13, 8, 0),
    (14, 8, 1),
    (15, 9, 0),
    (16, 9, 1),
    (5, 9, 0),
    (6, 9, 1),
    (7, 9, 0),
    (8, 9, 1),
    (9, 9, 0),
    (10, 10, 1),
    (11, 10, 0),
    (12, 10, 1),
    (13, 10, 0),
    (14, 10, 1),
    (15, 11, 0),
    (16, 11, 1),
    (5, 11, 0),
    (6, 11, 1),
    (7, 11, 0),
    (8, 11, 1),
    (9, 11, 0),
    (10, 12, 1),
    (11, 12, 0),
    (12, 12, 1),
    (13, 12, 0),
    (14, 12, 1),
    (15, 13, 0),
    (16, 13, 1),
    (5, 13, 0),
    (6, 13, 1),
    (7, 13, 0),
    (8, 13, 1),
    (9, 13, 0),
    (10, 14, 1),
    (11, 14, 0),
    (12, 14, 1),
    (13, 14, 0),
    (14, 14, 1),
    (15, 15, 0),
    (16, 15, 1),
    (5, 15, 0),
    (6, 15, 1),
    (7, 15, 0),
    (8, 15, 1),
    (9, 15, 0),
    (10, 16, 1),
    (11, 16, 0),
    (12, 16, 1),
    (13, 16, 0),
    (14, 16, 1);

CREATE TABLE `impacted_user` (
    `user_id` INT, `idea_id` INT, CONSTRAINT `fk_impacted_user_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE, CONSTRAINT `fk_impacted_user_idea_id` FOREIGN KEY (`idea_id`) REFERENCES `idea` (`id`) ON DELETE CASCADE, PRIMARY KEY (`user_id`, `idea_id`)
);

INSERT INTO
    impacted_user (user_id, idea_id)
VALUES (5, 3),
    (6, 4),
    (7, 5),
    (8, 6),
    (9, 7),
    (10, 8),
    (11, 9),
    (12, 10),
    (13, 11),
    (14, 12),
    (15, 13),
    (16, 14),
    (1, 15),
    (2, 16),
    (3, 17),
    (4, 18),
    (5, 19),
    (6, 20),
    (7, 21),
    (8, 22),
    (9, 23),
    (10, 24),
    (11, 25),
    (12, 26),
    (13, 27),
    (14, 28),
    (15, 29),
    (16, 30),
    (1, 31),
    (2, 32),
    (3, 33),
    (4, 34),
    (5, 25),
    (6, 26),
    (7, 27),
    (8, 28),
    (9, 29),
    (10, 30),
    (11, 31),
    (12, 32),
    (13, 33),
    (14, 34),
    (15, 1),
    (16, 2),
    (1, 3),
    (2, 4),
    (3, 5),
    (4, 6),
    (5, 7),
    (6, 8),
    (7, 9),
    (8, 10),
    (9, 11),
    (10, 12),
    (11, 13),
    (12, 14),
    (13, 15),
    (14, 16),
    (15, 17),
    (16, 18),
    (1, 19),
    (2, 20),
    (3, 21),
    (4, 22),
    (5, 23),
    (6, 24),
    (1, 25),
    (2, 26),
    (3, 27),
    (4, 28),
    (5, 29),
    (6, 30),
    (7, 31),
    (8, 32),
    (9, 33),
    (10, 34),
    (11, 1),
    (12, 2),
    (13, 3),
    (14, 4),
    (15, 5),
    (16, 6),
    (1, 7),
    (2, 8);

CREATE TABLE `comment` (
    `id` INT PRIMARY KEY AUTO_INCREMENT, `date_creation` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, `user_id` INT, `idea_id` INT, `description` VARCHAR(500) NOT NULL, CONSTRAINT `fk_comment_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE, CONSTRAINT `fk_comment_idea_id` FOREIGN KEY (`idea_id`) REFERENCES `idea` (`id`) ON DELETE CASCADE
);

INSERT INTO
    comment (user_id, idea_id, description)
VALUES (
        1, 1, "Excellent concept! Je suis impatient de participer à ce repas de Noël."
    ),
    (
        2, 1, "Bonne idée! Ça va vraiment créer une atmosphère festive."
    ),
    (
        3, 1, "J'adore l'idée du repas de Noël. Ça renforce vraiment l'esprit d'équipe."
    ),
    (
        4, 1, "C'est une excellente initiative! On peut peut-être organiser des activités ludiques aussi."
    ),
    (
        5, 1, "Je suis partant! Ça va être génial de célébrer les fêtes ensemble."
    ),
    (
        6, 2, "Il est temps de changer ces fenêtres. Merci pour la suggestion."
    ),
    (
        7, 2, "On ressent vraiment le froid dans le bureau 402. Bonne idée de changer les fenêtres."
    ),
    (
        8, 2, "Je suis d'accord. Les fenêtres doivent être remplacées pour assurer le confort."
    ),
    (
        9, 2, "C'est une priorité. Les fenêtres défectueuses nuisent à la productivité."
    ),
    (
        10, 2, "On devrait vraiment s'occuper de cela rapidement. Merci de soulever ce point."
    ),
    (
        5, 3, "Une télé dans la salle de pause serait génial! Ça détendra l'atmosphère."
    ),
    (
        6, 3, "J'aime l'idée d'avoir une télé dans la salle de pause. Ça ajoutera une touche de détente."
    ),
    (
        7, 3, "Belle proposition! Cela ajouterait une ambiance conviviale à la salle de pause."
    ),
    (
        8, 3, "Je suis pour! Ça rendra les pauses plus agréables."
    ),
    (
        9, 3, "C'est une excellente idée. On peut organiser des soirées cinéma!"
    ),
    (
        10, 4, "Une journée d'intégration est une excellente idée! Ça renforce les liens entre les équipes."
    ),
    (
        11, 4, "Je suis partant! Les nouvelles recrues seront ravies."
    ),
    (
        12, 4, "C'est une initiative louable. Ça créera un environnement accueillant."
    ),
    (
        13, 4, "On peut organiser des activités amusantes pour favoriser la cohésion."
    ),
    (
        14, 4, "J'apprécie l'idée de la journée d'intégration. Ça montre notre engagement envers les nouveaux employés."
    ),
    (
        15, 5, "Un programme de mentorat interne serait bénéfique pour le développement professionnel."
    ),
    (
        16, 5, "Je suis totalement pour le mentorat interne. Ça aidera les employés juniors."
    ),
    (
        1, 5, "Belle proposition! Ça favorisera le transfert de connaissances."
    ),
    (
        2, 5, "Le mentorat est crucial. Cela renforce également les liens entre les équipes."
    ),
    (
        3, 5, "Je pense que cela contribuera grandement au développement des compétences."
    ),
    (
        4, 6, "Réaménager les espaces de travail est une excellente idée. Ça améliorera l'environnement."
    ),
    (
        5, 6, "Je suis d'accord. Un environnement de travail bien conçu impacte la productivité."
    ),
    (
        6, 6, "On peut peut-être ajouter des zones de détente. Ça favorise la créativité."
    ),
    (
        7, 6, "Belle initiative! L'ergonomie est importante pour le bien-être des employés."
    ),
    (
        8, 6, "Je pense que cela contribuera à créer une atmosphère de travail plus agréable."
    ),
    (
        9, 7, "Initier des formations inter-équipes est une excellente idée. Ça encourage le partage de connaissances."
    ),
    (
        10, 7, "Je suis partant! On peut apprendre beaucoup les uns des autres."
    ),
    (
        11, 7, "C'est une proposition intelligente. Ça renforcera les compétences de l'équipe."
    ),
    (
        12, 7, "Belle initiative! Les formations peuvent stimuler l'efficacité opérationnelle."
    ),
    (
        13, 7, "Les sessions de formation inter-équipes sont cruciales pour rester compétitifs."
    ),
    (
        14, 8, "Une campagne de sensibilisation écologique est nécessaire. Ça montre notre responsabilité sociale."
    ),
    (
        15, 8, "Je suis d'accord. Promouvoir des actions en faveur de l'environnement est essentiel."
    ),
    (
        16, 8, "Belle proposition! Ça sensibilisera les employés aux problématiques environnementales."
    ),
    (
        1, 8, "C'est une initiative louable. Ça renforce l'image de l'entreprise."
    ),
    (
        2, 8, "La responsabilité sociale des entreprises est une priorité. Appuyé!"
    ),
    (
        3, 9, "Un système de récompenses motivera les employés. Excellente proposition."
    ),
    (
        4, 9, "Je suis totalement pour! Ça encourage la compétitivité de manière positive."
    ),
    (
        5, 9, "Belle idée! Les récompenses sont un excellent moyen de reconnaître le travail."
    ),
    (
        6, 9, "C'est une proposition intelligente. Ça stimulera l'engagement des employés."
    ),
    (
        7, 9, "Les récompenses contribuent à une culture d'entreprise positive."
    ),
    (
        8, 10, "Des événements sociaux réguliers renforceront la cohésion d'équipe. Super idée!"
    ),
    (
        9, 10, "Je suis partant! Ça ajouterait du plaisir à la vie professionnelle."
    ),
    (
        10, 10, "Belle proposition! Les événements sociaux sont importants pour le moral."
    ),
    (
        11, 10, "C'est une excellente idée. On peut organiser des activités diverses."
    ),
    (
        12, 10, "Les événements sociaux sont essentiels pour renforcer les relations professionnelles."
    ),
    (
        13, 10, "J'apprécie l'idée d'organiser des événements réguliers. Ça crée une atmosphère positive."
    ),
    (
        14, 10, "Cela contribuera à créer un environnement de travail convivial."
    ),
    (
        15, 10, "On peut organiser des événements variés pour satisfaire les préférences de chacun."
    ),
    (
        16, 10, "Une excellente initiative! Les événements sociaux renforcent les liens entre collègues."
    ),
    (
        1, 11, "Développer une application interne est une excellente idée. Ça facilitera la communication."
    ),
    (
        2, 11, "Je suis d'accord. Une application interne améliorera l'efficacité opérationnelle."
    ),
    (
        3, 11, "C'est une proposition intelligente. Ça pourrait simplifier de nombreux processus."
    ),
    (
        4, 11, "Belle initiative! Nous devrions explorer davantage cette possibilité."
    ),
    (
        5, 11, "Une application interne pourrait vraiment renforcer la collaboration entre les équipes."
    ),
    (
        6, 12, "Créer un programme de bien-être est une excellente initiative. La santé des employés est primordiale."
    ),
    (
        7, 12, "Je suis partant! Ça contribuera au bien-être général des employés."
    ),
    (
        8, 12, "Belle proposition! Un programme de bien-être améliorera la productivité."
    ),
    (
        9, 12, "C'est une idée formidable. La santé mentale et physique des employés est cruciale."
    ),
    (
        10, 12, "J'apprécie l'idée d'un programme de bien-être. Ça montre que l'entreprise se soucie de ses employés."
    ),
    (
        11, 13, "Installer des équipements sportifs est une excellente idée. Ça encouragera l'activité physique."
    ),
    (
        12, 13, "Je suis d'accord. Ça contribuera à un environnement de travail sain."
    ),
    (
        13, 13, "Belle initiative! Les équipements sportifs sont bénéfiques pour la santé."
    ),
    (
        14, 13, "C'est une excellente idée. Ça pourrait également renforcer l'esprit d'équipe."
    ),
    (
        15, 13, "J'apprécie l'idée d'installer des équipements sportifs. Ça favorisera la détente au travail."
    ),
    (
        16, 14, "Un événement d'intégration est une excellente idée pour les nouveaux employés."
    ),
    (
        1, 14, "Je suis partant! Ça facilitera l'adaptation des nouveaux collègues."
    ),
    (
        2, 14, "Belle proposition! Les événements d'intégration renforcent la cohésion."
    ),
    (
        3, 14, "C'est une initiative louable. Ça montre que nous accueillons chaleureusement les nouveaux."
    ),
    (
        4, 14, "J'apprécie l'idée d'organiser un événement d'intégration. Ça créerait un environnement accueillant."
    ),
    (
        5, 15, "Proposer des suggestions pour améliorer les espaces de travail est une excellente idée."
    ),
    (
        6, 15, "Je suis d'accord. Un environnement de travail bien conçu impacte la productivité."
    ),
    (
        7, 15, "On peut peut-être ajouter des plantes pour une atmosphère plus agréable."
    ),
    (
        8, 15, "Belle initiative! Cela favorisera la créativité et le bien-être."
    ),
    (
        9, 15, "Je pense que cela contribuera à créer un espace de travail plus convivial."
    ),
    (
        10, 31, "Un programme de parrainage pour les nouveaux employés est une excellente idée."
    ),
    (
        11, 31, "Je suis partant! Ça facilitera l'intégration des nouveaux collègues."
    ),
    (
        12, 31, "Belle proposition! Les programmes de parrainage renforcent la connexion entre les équipes."
    ),
    (
        13, 31, "C'est une initiative louable. Ça montre que nous nous soutenons mutuellement."
    ),
    (
        14, 31, "J'apprécie l'idée d'un programme de parrainage. Ça crée une culture d'entraide au sein de l'entreprise."
    ),
    (
        15, 18, "Une journée sans réunion est une excellente idée! Ça favorisera la concentration."
    ),
    (
        16, 18, "Je suis d'accord. On a parfois besoin de temps sans réunions pour être productif."
    ),
    (
        1, 18, "Belle proposition! Cela permettra aux employés de se concentrer sur des tâches individuelles."
    ),
    (
        2, 18, "C'est une excellente idée. Une journée sans réunion peut être très bénéfique."
    ),
    (
        3, 18, "J'apprécie l'idée d'avoir une journée dédiée au travail individuel. Ça évite les interruptions."
    ),
    (
        4, 19, "Créer une boîte à idées virtuelle est une excellente idée! Ça encourage l'innovation."
    ),
    (
        5, 19, "Je suis d'accord. Cela permettra à chacun de contribuer à l'amélioration de l'entreprise."
    ),
    (
        6, 19, "Belle proposition! Une boîte à idées virtuelle facilitera la collecte des suggestions."
    ),
    (
        7, 19, "C'est une excellente initiative. Ça encourage la participation de tous."
    ),
    (
        8, 19, "J'apprécie l'idée d'avoir une boîte à idées virtuelle. Ça favorise la transparence et l'inclusion."
    ),
    (
        9, 20, "Un programme de flexibilité d'horaire est une excellente idée! Ça favorisera l'équilibre travail-vie."
    ),
    (
        10, 20, "Je suis partant! La flexibilité d'horaire est importante pour le bien-être des employés."
    ),
    (
        11, 20, "Belle proposition! Cela permettra aux employés de gérer leur temps de manière adaptée."
    ),
    (
        12, 20, "C'est une excellente idée. La flexibilité d'horaire contribue à la satisfaction des employés."
    ),
    (
        13, 20, "J'apprécie l'idée d'un programme de flexibilité d'horaire. Ça montre une compréhension des besoins individuels."
    ),
    (
        14, 21, "Initier des initiatives de développement durable est une excellente idée! Ça montre notre engagement."
    ),
    (
        15, 21, "Je suis d'accord. Les initiatives durables sont essentielles de nos jours."
    ),
    (
        16, 21, "Belle proposition! Cela contribuera positivement à notre image de marque."
    ),
    (
        1, 21, "C'est une excellente initiative. Ça peut également inspirer d'autres entreprises."
    ),
    (
        2, 21, "J'apprécie l'idée de contribuer à un impact positif sur l'environnement. Ça motive."
    ),
    (
        3, 22, "Organiser un concours d'innovation est une excellente idée! Ça stimulera la créativité."
    ),
    (
        4, 22, "Je suis d'accord. Un concours d'innovation peut apporter des idées novatrices."
    ),
    (
        5, 22, "Belle proposition! Ça motive les employés à penser en dehors des sentiers battus."
    ),
    (
        6, 22, "C'est une excellente initiative. Ça peut également renforcer la culture d'innovation."
    ),
    (
        7, 22, "J'apprécie l'idée de stimuler la créativité au sein de l'entreprise. Ça favorise la croissance."
    ),
    (
        8, 23, "Encourager le volontariat d'entreprise est une excellente idée! Ça renforce notre engagement social."
    ),
    (
        9, 23, "Je suis partant! Le volontariat est un moyen formidable de contribuer à la communauté."
    ),
    (
        10, 23, "Belle proposition! Cela permettra aux employés de s'impliquer dans des projets significatifs."
    ),
    (
        11, 23, "C'est une excellente initiative. Ça montre notre responsabilité envers la société."
    ),
    (
        12, 23, "J'apprécie l'idée d'encourager le volontariat d'entreprise. Ça crée un impact positif."
    ),
    (
        13, 24, "Proposer des idées pour optimiser les processus internes est une excellente idée! Ça améliorera l'efficacité."
    ),
    (
        14, 24, "Je suis d'accord. L'optimisation des processus est essentielle pour la croissance."
    ),
    (
        15, 24, "Belle proposition! Cela contribuera à une meilleure productivité."
    ),
    (
        16, 24, "C'est une excellente initiative. Ça peut simplifier les opérations internes."
    ),
    (
        1, 24, "J'apprécie l'idée d'optimiser nos processus internes. Ça pourrait économiser du temps et des ressources."
    ),
    (
        2, 25, "Créer un programme de récompenses pour l'innovation est une excellente idée! Ça motive."
    ),
    (
        3, 25, "Je suis d'accord. Les récompenses encouragent la créativité et l'effort."
    ),
    (
        4, 25, "Belle proposition! Cela reconnaîtra les efforts des employés innovants."
    ),
    (
        5, 25, "C'est une excellente initiative. Ça renforce une culture d'innovation."
    ),
    (
        6, 25, "J'apprécie l'idée de récompenser l'innovation. Ça valorise le travail créatif."
    ),
    (
        7, 26, "Proposer un programme de développement professionnel est une excellente idée! Ça favorisera la croissance."
    ),
    (
        8, 26, "Je suis partant! Les formations spécialisées sont bénéfiques pour l'ensemble de l'équipe."
    ),
    (
        9, 26, "Belle proposition! Cela contribuera à l'amélioration des compétences."
    ),
    (
        10, 26, "C'est une excellente initiative. Ça montre notre engagement envers le développement professionnel."
    ),
    (
        11, 26, "J'apprécie l'idée d'investir dans le développement professionnel. Ça renforce l'expertise de l'équipe."
    ),
    (
        12, 26, "Une semaine de la diversité et de l'inclusion est une excellente idée! Ça favorisera la sensibilisation."
    ),
    (
        13, 26, "Je suis d'accord. Cela renforcera notre engagement envers la diversité."
    ),
    (
        14, 27, "Belle proposition! Cela encouragera le respect et l'inclusion au sein de l'entreprise."
    ),
    (
        15, 27, "C'est une excellente initiative. Ça montre notre engagement envers l'égalité."
    ),
    (
        16, 27, "J'apprécie l'idée d'une semaine dédiée à la diversité. Ça encourage la compréhension mutuelle."
    ),
    (
        1, 28, "Lancer une campagne de sensibilisation à la cybersécurité est une excellente idée! Ça renforce la sécurité."
    ),
    (
        2, 28, "Je suis d'accord. La cybersécurité est cruciale dans notre environnement numérique."
    ),
    (
        3, 28, "Belle proposition! Cela sensibilisera les employés aux meilleures pratiques."
    ),
    (
        4, 28, "C'est une excellente initiative. Ça contribuera à protéger nos données sensibles."
    ),
    (
        5, 28, "J'apprécie l'idée de renforcer la sensibilisation à la cybersécurité. Ça protège l'entreprise et ses employés."
    ),
    (
        6, 29, "Créer une bibliothèque de ressources numériques est une excellente idée! Ça favorisera l'apprentissage."
    ),
    (
        7, 29, "Je suis d'accord. Les ressources numériques facilitent l'accès à l'information."
    ),
    (
        8, 29, "Belle proposition! Cela encouragera la continuité de l'apprentissage."
    ),
    (
        9, 29, "C'est une excellente initiative. Ça pourrait aider les employés dans leur développement."
    ),
    (
        10, 29, "J'apprécie l'idée d'une bibliothèque numérique. Ça offre une source centralisée de connaissances."
    ),
    (
        11, 30, "Recueillir des suggestions pour aménager des espaces collaboratifs est une excellente idée! Ça favorisera la créativité."
    ),
    (
        12, 30, "Je suis d'accord. Les espaces collaboratifs sont essentiels pour le travail d'équipe."
    ),
    (
        13, 30, "Belle proposition! Cela créera des environnements propices à la collaboration."
    ),
    (
        14, 30, "C'est une excellente initiative. Ça pourrait améliorer la communication interne."
    ),
    (
        15, 30, "J'apprécie l'idée d'améliorer nos espaces collaboratifs. Ça stimule l'innovation."
    ),
    (
        16, 31, "Mettre en place un programme de parrainage pour les nouveaux employés est une excellente idée! Ça facilitera l'intégration."
    ),
    (
        1, 31, "Je suis d'accord. Le parrainage crée une atmosphère accueillante."
    ),
    (
        2, 31, "Belle proposition! Cela aidera les nouveaux à s'adapter plus rapidement."
    ),
    (
        3, 30, "C'est une excellente initiative. Ça favorise la connexion entre les anciens et les nouveaux."
    ),
    (
        4, 30, "J'apprécie l'idée d'un programme de parrainage. Ça montre notre soutien envers les nouveaux collaborateurs."
    ),
    (
        5, 32, "Organiser un hackathon interne est une excellente idée! Ça stimulera l'innovation."
    ),
    (
        6, 32, "Je suis d'accord. Les hackathons créent un environnement propice à la créativité."
    ),
    (
        7, 32, "Belle proposition! Cela encouragera la collaboration entre les équipes."
    ),
    (
        8, 32, "C'est une excellente initiative. Ça pourrait générer des idées novatrices."
    ),
    (
        9, 32, "J'apprécie l'idée d'organiser un hackathon. Ça renforce notre culture d'innovation."
    ),
    (
        10, 33, "Proposer un système de récompenses basé sur la productivité est une excellente idée! Ça motive."
    ),
    (
        11, 33, "Je suis d'accord. Les récompenses liées à la productivité encouragent l'effort."
    ),
    (
        12, 33, "Belle proposition! Cela reconnaîtra les performances exceptionnelles."
    ),
    (
        13, 33, "C'est une excellente initiative. Ça stimulera la compétitivité positive."
    ),
    (
        14, 33, "J'apprécie l'idée d'un système de récompenses pour la productivité. Ça valorise le travail acharné."
    ),
    (
        15, 34, "Permettre aux employés de s'engager dans des activités de volontariat virtuelles est une excellente idée! Ça renforce notre impact social."
    ),
    (
        16, 34, "Je suis d'accord. Le volontariat virtuel offre des opportunités flexibles d'engagement."
    ),
    (
        1, 34, "Belle proposition! Cela permettra aux employés de contribuer à distance."
    ),
    (
        2, 34, "C'est une excellente initiative. Ça montre notre volonté de faire une différence."
    ),
    (
        3, 34, "J'apprécie l'idée de promouvoir le volontariat virtuel. Ça favorise l'engagement social."
    ),
    (
        4, 35, "Créer un club de lecture d'entreprise est une excellente idée! Ça favorisera la culture et l'échange d'idées."
    ),
    (
        5, 35, "Je suis d'accord. Un club de lecture peut renforcer la cohésion et la culture."
    ),
    (
        6, 35, "Belle proposition! Cela encourage la diversité des lectures et des perspectives."
    ),
    (
        7, 35, "C'est une excellente initiative. Ça favorise la curiosité intellectuelle."
    ),
    (
        8, 35, "J'apprécie l'idée d'un club de lecture. Ça offre un espace pour partager nos découvertes."
    ),
    (
        9, 15, "Proposer des suggestions pour améliorer l'ergonomie et la convivialité des espaces de travail est une excellente idée! Ça favorisera le bien-être."
    ),
    (
        10, 15, "Je suis d'accord. L'amélioration des espaces de travail contribue à la satisfaction des employés."
    ),
    (
        11, 15, "Belle proposition! Cela créera des environnements plus agréables."
    ),
    (
        12, 15, "C'est une excellente initiative. Ça pourrait augmenter la productivité."
    ),
    (
        13, 15, "J'apprécie l'idée d'améliorer nos espaces de travail. Ça montre notre souci du bien-être des employés."
    );