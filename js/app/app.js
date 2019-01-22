$(document).ready(function() {
    App.setup();
});

var App = {

    // Whether to disable the score button when pressed, as to prevent unintended double taps
    tempDisable: true,
    // How long to disable add score button (in ms)
    tempDisableLength: 500,

    setup: function() {

        this.Teams.setup();
        this.Colors.setup();
        this.Reset.setup();
    },

    Teams: {

        teamsDiv: undefined,

        setup: function() {

            this.teamsDiv = $("[data-role='teams']");
            this.observeAddScore();
        },

        observeAddScore: function() {

            this.teamsDiv.find("[data-role='add-goal']").off('click').on('click', function() {

                App.Teams.addGoal($(this).data('team'));
            });
        },

        getTeam: function(team) {

            return this.teamsDiv.find("[data-role='team'][data-team='"+team+"']");
        },

        addGoal: function(team) {

            var score = this.getTeam(team).find("[data-role='score']");
            score.text(parseInt(score.text()) + 1);

            if(App.tempDisable) {
                App.Disable.temporary();
            }
        },

        getScores: function(team) {

            var scores;
            if(team !== undefined) {
                scores = this.getTeam(team);
                scores = scores.find("[data-role='score']");
            }
            else {
                scores = $("[data-role='score']")
            }
            return scores;
        }
    },

    Colors: {

        colors: ["red", "black", "yellow", "blue"],

        setup: function() {

            this.observeColorChange();
        },

        observeColorChange: function() {

            $("[data-role='color-pick']").off('click').on('click', function() {

                var team = App.Teams.getTeam($(this).data('team'));
                App.Colors.changeColor(team.find('[data-role="team-box"]'));
            });
        },

        changeColor: function(teamBox) {

            var posColor = this.getColor(teamBox);
            var oldColor = this.colors[posColor];
            // Color to be used for the team
            var newColor;

            // If active color is the last color, set new color to first possible color
            if(posColor >= this.colors.length -1) {

                newColor = this.colors[0];
            }
            // Set active color to the next possible color
            else {

                newColor = this.colors[posColor + 1];
            }

            this.setColor(teamBox, oldColor, newColor);
        },

        getColor: function(teamBox) {

            // The color that the team has currently
            var classes = teamBox.attr('class');
            var activeColorPos;

            for(var i = 0; i < this.colors.length; i++) {

                if(classes.indexOf(this.colors[i]) !== -1) {
                    activeColorPos = i;
                    break;
                }
            }
            if(activeColorPos === undefined) {
                console.error('No matching color found.');
            }
            // Position that the active color is in the possible colors array
            return activeColorPos;
        },

        setColor: function(teamBox, oldColor, newColor) {

            teamBox.removeClass(oldColor);
            teamBox.addClass(newColor);
        }
    },

    Disable: {

        temporary: function() {

            App.Disable.disable();
            window.setTimeout(function() { App.Disable.enable() }, App.tempDisableLength);
        },

        disable: function() {

            App.Teams.teamsDiv.find("[data-role='add-goal']").off('click');
        },

        enable: function() {

            App.Teams.setup();
        }
    },

    Reset: {

        setup: function() {

            this.observeReset();
        },

        observeReset: function() {

            $("[data-role='reset']").off('click').on('click', function() {

                App.Reset.reset();
            });
        },

        reset: function() {

            App.Teams.getScores().text("0");
        }
    }
};
