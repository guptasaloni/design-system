/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import MediaObject from 'ui/components/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import Checkbox from 'ui/components/forms/flavors/checkbox/index.react';
import componentUtil from 'app_modules/ui/util/component';
const pf = componentUtil.prefix;

const form = (
  <Checkbox assistiveText="mark-complete"/>
);

export default (
<div className='demo-only' style={{width: '300px'}}>
  <MediaObject figureLeft={form} className={pf('tile')}>
    <div className={pf('grid grid--align-spread has-flexi-truncate')}>
      <p className={pf('tile__title truncate')}>
        <a href="#">The Trammel Crow Company</a>
      </p>
      <span className={pf('label')}>Today</span>
    </div>
    <div className={pf('tile__detail text-body--small')}>
      <p className={pf('truncate')}>Assignee</p>
    </div>
  </MediaObject>
</div>
);
