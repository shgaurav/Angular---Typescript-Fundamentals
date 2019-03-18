
export class LikeComponent { 
    constructor(private _likesCount: number, private _isSelected: boolean) {
    }

    onClick() {
        this._likesCount += (this._isSelected) ? -1 : +1; //Incrementing and decrementing
        this._isSelected = !this._isSelected; //Toggling the icon.
    }

    get likesCount() { //Getters
        return this._likesCount;
    }

    get isSelected() { //getters
        return this._isSelected;
    }
}