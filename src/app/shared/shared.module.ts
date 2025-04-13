import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from './pipes/translate.pipe';
import { TranslateService } from './services/translate.service';
import { ScreenWidthService } from './services/screen-width.service';
import { DialogueDisplayComponent } from './components/dialogue-display/dialogue-display.component';
import { DialogueManagerService } from './services/dialogue-manager.service';
import { TypingAnimationDirective } from './components/dialogue-display/typing-animation/typing-animation.directive';
import { RouteManagerService } from './services/route-manager.service';

@NgModule({
	declarations: [
		DialogueDisplayComponent,
		TranslatePipe,
		DialogueDisplayComponent,
		TypingAnimationDirective,
	],
	imports: [CommonModule],
	exports: [TranslatePipe, DialogueDisplayComponent],
	providers: [
		TranslateService,
		ScreenWidthService,
		DialogueManagerService,
		RouteManagerService,
	],
})
export class SharedModule {}
