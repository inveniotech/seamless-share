﻿using meerkat;
using meerkat.Attributes;

namespace SeamlessShareApi.Models.Data;

[Collection(Name = "files", TrackTimestamps = true)]
public class Link: Schema
{
    public new Guid Id { get; private set; }
    
    public Guid ShareId { get; private set; }
}
