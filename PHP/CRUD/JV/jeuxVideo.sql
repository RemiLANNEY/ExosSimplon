-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le :  lun. 11 fév. 2019 à 10:02
-- Version du serveur :  5.7.25-0ubuntu0.18.04.2
-- Version de PHP :  7.1.26-1+ubuntu18.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `jeuxVideo`
--
CREATE DATABASE IF NOT EXISTS `jeuxVideo` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `jeuxVideo`;

-- --------------------------------------------------------

--
-- Structure de la table `Genre`
--

DROP TABLE IF EXISTS `Genre`;
CREATE TABLE IF NOT EXISTS `Genre` (
  `Genre_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Genre_Titre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Genre_Description` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Genre_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `Genre`
--

INSERT INTO `Genre` (`Genre_Id`, `Genre_Titre`, `Genre_Description`) VALUES
(1, 'MMO', 'MMO'),
(2, 'FPS', 'FPS'),
(3, 'RPG', 'RPG'),
(4, 'Action', 'Action'),
(5, 'Sport', 'Sport');

-- --------------------------------------------------------

--
-- Structure de la table `Jeux`
--

DROP TABLE IF EXISTS `Jeux`;
CREATE TABLE IF NOT EXISTS `Jeux` (
  `Jeux_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Jeux_Titre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Jeux_Description` text COLLATE utf8_unicode_ci NOT NULL,
  `Jeux_Prix` float NOT NULL,
  `Jeux_DateSortie` date NOT NULL,
  `Jeux_PaysOrigine` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Jeux_Connexion` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Jeux_Mode` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Genre_Id` int(11) NOT NULL,
  PRIMARY KEY (`Jeux_Id`),
  KEY `Genre` (`Genre_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `Jeux`
--

INSERT INTO `Jeux` (`Jeux_Id`, `Jeux_Titre`, `Jeux_Description`, `Jeux_Prix`, `Jeux_DateSortie`, `Jeux_PaysOrigine`, `Jeux_Connexion`, `Jeux_Mode`, `Genre_Id`) VALUES
(2, 'Final Fantasy XV', 'Final Fantasy XV c\'est pourri', 79, '2016-04-28', 'Japon', 'Oui', 'singles', 3),
(5, 'Far Cry 5', 'Far Cry 5', 59.99, '2018-04-18', 'USA', 'Online', 'Solo', 2),
(6, 'Sea of Thieves', 'Sea of Thieves', 52.99, '2017-11-28', 'USA', 'Online', 'Multi-en-ligne', 1),
(7, 'Monster Hunter World', 'Monster Hunter World', 69.99, '2017-06-21', 'Japon', 'Online', 'Solo', 3),
(8, 'Dragon Ball FighterZ', 'Dragon Ball FighterZ', 49.99, '2017-05-19', 'Japon', 'Online', 'Solo', 4),
(9, 'A Way Out', 'A Way Out', 29.99, '2017-12-08', 'USA', 'Online', 'Multi-en-ligne', 4),
(10, 'Call of Duty WWII', 'Call of Duty WWII', 49.99, '2018-02-02', 'USA', 'Online', 'Solo', 2),
(11, 'Extinction', 'Extinction', 59.99, '2018-05-18', 'USA', 'Online', 'Solo', 4),
(12, 'Fifa 18', 'Fifa 18', 39.99, '2017-12-08', 'USA', 'Online', 'Multi', 5),
(13, 'Warhammer Vermintide 2', 'Warhammer Vermintide 2', 23.99, '2017-03-18', 'USA', 'Online', 'Solo', 2),
(14, 'Star Wars : Battlefront II', 'Star Wars : Battlefront II', 35, '2017-06-17', 'Europe', 'Online', 'Solo', 2);

-- --------------------------------------------------------

--
-- Structure de la table `JeuxPlateforme`
--

DROP TABLE IF EXISTS `JeuxPlateforme`;
CREATE TABLE IF NOT EXISTS `JeuxPlateforme` (
  `Jeux_Id` int(11) NOT NULL,
  `Plateforme_Id` int(11) NOT NULL,
  PRIMARY KEY (`Jeux_Id`,`Plateforme_Id`),
  KEY `Plateforme` (`Plateforme_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `JeuxPlateforme`
--

INSERT INTO `JeuxPlateforme` (`Jeux_Id`, `Plateforme_Id`) VALUES
(2, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(12, 1),
(13, 1),
(14, 1),
(2, 2),
(5, 2),
(7, 2),
(8, 2),
(11, 2),
(12, 2),
(5, 3),
(7, 3),
(8, 3),
(11, 3),
(12, 3),
(8, 4),
(10, 4),
(12, 4),
(14, 4);

-- --------------------------------------------------------

--
-- Structure de la table `Plateforme`
--

DROP TABLE IF EXISTS `Plateforme`;
CREATE TABLE IF NOT EXISTS `Plateforme` (
  `Plateforme_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Plateforme_Nom` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Plateforme_Description` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Plateforme_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `Plateforme`
--

INSERT INTO `Plateforme` (`Plateforme_Id`, `Plateforme_Nom`, `Plateforme_Description`) VALUES
(1, 'PC', 'fgsdgfdfg'),
(2, 'PS4', 'ghdfghdfgh'),
(3, 'ONE', 'gdsfg'),
(4, 'Switch', 'gdsgdfgd');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Jeux`
--
ALTER TABLE `Jeux`
  ADD CONSTRAINT `Genre` FOREIGN KEY (`Genre_Id`) REFERENCES `Genre` (`Genre_Id`);

--
-- Contraintes pour la table `JeuxPlateforme`
--
ALTER TABLE `JeuxPlateforme`
  ADD CONSTRAINT `Jeux` FOREIGN KEY (`Jeux_Id`) REFERENCES `Jeux` (`Jeux_Id`),
  ADD CONSTRAINT `Plateforme` FOREIGN KEY (`Plateforme_Id`) REFERENCES `Plateforme` (`Plateforme_Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
