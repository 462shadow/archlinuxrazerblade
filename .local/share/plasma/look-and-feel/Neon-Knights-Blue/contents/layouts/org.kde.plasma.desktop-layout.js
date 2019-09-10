var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "0"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "showSecondHand": "true"
                        }
                    },
                    "geometry.height": 14,
                    "geometry.width": 16,
                    "geometry.x": 56,
                    "geometry.y": 1,
                    "plugin": "org.kde.plasma.analogclock",
                    "title": "Reloj analógico"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "34"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "geometry.height": 3,
                    "geometry.width": 3,
                    "geometry.x": 70,
                    "geometry.y": 33,
                    "plugin": "org.kde.plasma.showActivityManager",
                    "title": "Actividades"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "34",
                            "formfactor": "0",
                            "immutability": "1",
                            "lastScreen": "-1",
                            "wallpaperplugin": ""
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "iconSize": "3",
                            "labelMode": "0",
                            "previews": "false",
                            "url": "file:///home/usuario"
                        }
                    },
                    "geometry.height": 14,
                    "geometry.width": 24,
                    "geometry.x": 31,
                    "geometry.y": 6,
                    "plugin": "org.kde.plasma.folder",
                    "title": "Carpeta personal"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "703",
                    "DialogWidth": "1366"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topright",
                    "ToolBoxButtonX": "1338"
                },
                "/Wallpaper/org.kde.color/General": {
                    "Color": "26,30,36"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Color": "invalid",
                    "FillMode": "0",
                    "Image": "file:///home/usuario/.local/share/wallpapers/NeonKnightsWallpaper.jpg"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "100",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "100",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/Configuration%2FGeneral": {
                            "showAppsByName": "true"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/General": {
                            "favorites": "preferred://browser,org.kde.discover.desktop,org.kde.kontact.desktop,org.kde.kate.desktop,libreoffice-startcenter.desktop,org.kde.dolphin.desktop,org.kde.ksysguard.desktop,systemsettings.desktop,org.kde.konsole.desktop",
                            "favoritesPortedToKAstats": "true",
                            "showAppsByName": "true"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/Shortcuts": {
                            "global": "Alt+F1"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "favorites": "preferred://browser\\,org.kde.discover.desktop\\,org.kde.kontact.desktop\\,org.kde.kate.desktop\\,libreoffice-startcenter.desktop\\,org.kde.dolphin.desktop\\,org.kde.ksysguard.desktop\\,systemsettings.desktop\\,org.kde.konsole.desktop",
                            "favoritesPortedToKAstats": "true",
                            "showAppsByName": "true"
                        },
                        "/Configuration/Configuration/Configuration/Shortcuts": {
                            "global": "Alt+F1"
                        },
                        "/Configuration/Configuration/General": {
                            "favorites": "preferred://browser\\\\\\,org.kde.discover.desktop\\\\\\,org.kde.kontact.desktop\\\\\\,org.kde.kate.desktop\\\\\\,libreoffice-startcenter.desktop\\\\\\,org.kde.dolphin.desktop\\\\\\,org.kde.ksysguard.desktop\\\\\\,systemsettings.desktop\\\\\\,org.kde.konsole.desktop",
                            "favoritesPortedToKAstats": "true",
                            "showAppsByName": "true"
                        },
                        "/Configuration/Configuration/Shortcuts": {
                            "global": "Alt+F1"
                        },
                        "/Configuration/General": {
                            "favorites": "preferred://browser\\\\\\\\\\\\\\,org.kde.discover.desktop\\\\\\\\\\\\\\,org.kde.kontact.desktop\\\\\\\\\\\\\\,org.kde.kate.desktop\\\\\\\\\\\\\\,libreoffice-startcenter.desktop\\\\\\\\\\\\\\,org.kde.dolphin.desktop\\\\\\\\\\\\\\,org.kde.ksysguard.desktop\\\\\\\\\\\\\\,systemsettings.desktop\\\\\\\\\\\\\\,org.kde.konsole.desktop",
                            "favoritesPortedToKAstats": "true",
                            "showAppsByName": "true"
                        },
                        "/Configuration/Shortcuts": {
                            "global": "Alt+F1"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.taskmanager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "84",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "31"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Appearance": {
                            "displayTimezoneAsCode": "false",
                            "showSeconds": "true",
                            "use24hFormat": "2"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Appearance": {
                            "displayTimezoneAsCode": "false",
                            "showSeconds": "true",
                            "use24hFormat": "2"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "42",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "0",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.showdesktop"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "84",
                    "DialogWidth": "1366"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 2.2222222222222223,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 75.88888888888889,
            "minimumLength": 75.88888888888889,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
