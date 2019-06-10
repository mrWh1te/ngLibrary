import { RouterTestingModule } from '@angular/router/testing' 
import {
  async,
  ComponentFixture,
} from '@angular/core/testing'

import { AppComponent } from './app.component'
import { ConfigureFn, configureTests } from './../../jest/config.helpers'

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>
  let component: AppComponent

  beforeEach(async(() => {
    const configure: ConfigureFn = testBed => {
      testBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [AppComponent]
      })
    }

    configureTests(configure).then(testBed => {
      fixture = testBed.createComponent(AppComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
    })
  }))

  it('should create the base app component', async(() => {
    const app = component
    expect(app).toBeTruthy()
  }))
})