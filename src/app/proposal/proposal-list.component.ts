import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(
		15, 'Abc Company', 'http://portfolio.steventebbs.com', 'Ruby on Rails', 150, 120, 15, 'steven@devcamp.com'
		)
	proposalTwo: Proposal = new Proposal(
		30, 'Def Company', 'http://portfolio.steventebbs.com', 'Ruby on Rails', 150, 120, 15, 'steven@devcamp.com'
		)
	proposalThree: Proposal = new Proposal(
		45, 'Ghi Company', 'http://portfolio.steventebbs.com', 'Ruby on Rails', 150, 120, 15, 'steven@devcamp.com'
		)

	proposals: Proposal[] = [
	this.proposalOne, 
	this.proposalTwo, 
	this.proposalThree
	]
}