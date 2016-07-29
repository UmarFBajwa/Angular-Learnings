<div
  class="simple-board"
  ng-repeat="(boardId, board)in ctrl.boards">
  <h3>{{board.title}}</h3>
  <p>{{board.title}}</p>
  <input type="checkbox" ng-model="model.isPublic"/> Is Public?
</div>

<div ng-if"ctrl.isEditing">
