
class FollowToggle {

    constructor (el) {
        this.el = el;
        this.userid = el.data-userid;
        this.followState = el.data-followState;
        this.render();
    }

    render () {
        this.followState === "unfollow" ? this.el.text("follow") : this.el.text("unfollow");
    }


}



module.exports = FollowToggle;


